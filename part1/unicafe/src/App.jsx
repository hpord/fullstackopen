import { useState } from 'react'

const Button = (props) => {
  const {onClick, text} = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  const {text, value} = props
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}{text=="positive" ? "%" : ""}</td> 
      </tr>
    </tbody>
  )
}

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
      <table>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="average" value ={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text="positive" value ={100*good/(good + neutral + bad)} />
      </table>
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
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
