import Person from "./Person"

const Persons = ({ persons, toggleDeleteRef }) => {
    return (
        <dl>
            {persons.map((person) => (
            <Person key={person.name}
            name={person.name}
            number={person.number}
            toggleDelete={()=>toggleDeleteRef(person.id)}
            />
        ))}
      </dl>
    )
}
  
export default Persons