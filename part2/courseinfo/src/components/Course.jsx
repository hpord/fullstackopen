const Header = ({course}) => <h2>{course}</h2>

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

const Total = ({total}) => <p><strong>Total of {total} exercises</strong></p>

const Course = ({course}) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total
        total={course.parts.reduce((total, part) => (
            total + part.exercises
        ), 0)}
    />
  </>
)

export default Course