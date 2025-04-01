const Header = (props) => {
  const {course} = props
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = (props) => {
  const {name, exercises} = props
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = (props) => {
  const {parts} = props
  const numExercises = parts.reduce((total, part) => (
    total + part.exercises
  ), 0)
  return (
    <>
      <p>Number of exercises {numExercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
