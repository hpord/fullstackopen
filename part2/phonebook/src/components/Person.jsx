const Person = ({ name, number, toggleDelete }) => {
    return (
    <dt>
        {name} {number} {' '}
        <button onClick={toggleDelete}> delete</button>
    </dt>
    )
}
  
export default Person