import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props
  if (good + neutral + bad == 0) {
    return(
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h2>statistics</h2>
      <dl>
        <dt>good {good}</dt>
        <dt>neutral {neutral}</dt>
        <dt>bad {bad}</dt>
        <dt>all {good + neutral + bad}</dt>
        <dt>average {(good - bad)/(good + neutral + bad)}</dt>
        <dt>positive {100*good/(good + neutral + bad)} %</dt>
      </dl>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
