import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[stringFind, setStringFind] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const newNameTrim = newName.trim()
    if (persons.some(person => 
      person.name.toLowerCase() === newNameTrim.toLowerCase()
    )) {
      alert(`${newNameTrim} is already added to phonebook`);
      return
    }

    const nameObject = {
      name: newNameTrim,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFindChange = (event) => {
    setStringFind(event.target.value.trim())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFindChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        onSubmit={addName}
        value1={newName} onChange1={handleNameChange}
        value2={newNumber} onChange2={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons.filter(person => 
        person.name.toLowerCase()
        .includes(stringFind.trim().toLowerCase())
      )} />
    </div>
  )
}

export default App
