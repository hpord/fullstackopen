import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[stringFind, setStringFind] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const toggleDelete = (id) => {
    if (window.confirm(`Delete ${persons.find(person => person.id == id).name}?`)) {
      personService
      .deleteElement(id)
      .then(deletedPerson => {
        console.log(deletedPerson)
        setPersons(persons.filter(person => person.id != id))
      })
    }
    
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
      )} 
      toggleDeleteRef={toggleDelete}
      />
    </div>
  )
}

export default App
