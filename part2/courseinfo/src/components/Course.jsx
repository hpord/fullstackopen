const Header = ({course}) => <h1>{course}</h1>

const Content = ({parts}) => (
  <>
    {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )}
  </>
)

const Part = ({name, exercises}) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({course}) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises +
          course.parts[3].exercises
        }
    />
  </>
)

export default Course