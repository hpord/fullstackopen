import { useState } from 'react'

const Button = (props) => {
  const {onClick, text} = props
  return (
      <button onClick={onClick}>
        {text}
      </button>
  )
}

const Anecdote = (props) => {
  const {title, text} = props
  return (
    <dt>
      <h2>{title}</h2>
      {text}
    </dt>
  )
}

const Votes = (props) => {
  const {numVotes} = props
  return (
    <dt>
      has {numVotes} votes
    </dt>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes ] = useState(0)

  const handleAnecdote = () => {
    let newSelected
    do {
      newSelected = Math.floor(Math.random() * anecdotes.length)
    } while (newSelected == selected)
    setSelected(newSelected)
  }

  const handleVotes = () => {
    setVotes(votes.map(
      (vote, index) => {
        if (index == selected) return vote + 1
        else return vote
      }
    ))
    if (votes[selected] + 1 > votes[mostVotes]) setMostVotes(selected)
    else setMostVotes(mostVotes)
  }

  return (
    <div>
        <Anecdote title="Anecdote of the day" text={anecdotes[selected]}/>
        <Votes numVotes={votes[selected]} />
        <Button onClick={handleVotes} text="vote" />
        <Button onClick={handleAnecdote} text="next anecdote" />
        <Anecdote title="Anecdote with most votes" text={anecdotes[mostVotes]}/>
        <Votes numVotes={votes[mostVotes]} />
    </div>
  )
}

export default App