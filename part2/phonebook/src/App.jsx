import { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    const newNameTrim = newName.trim()
    event.preventDefault()

    if (persons.some(person => 
      person.name.toLowerCase() === newNameTrim.toLowerCase()
    )) {
      alert(`${newNameTrim} is already added to phonebook`);
      return
    }

    const nameObject = {
      name: newNameTrim
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <dl>
        {persons.map((person) => (
          <Number key={person.name} name={person.name} />
        ))}
      </dl>
    </div>
  )
}

export default App
