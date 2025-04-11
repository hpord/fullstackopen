import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[stringFind, setStringFind] = useState('')
  const [notificationConf, setNotificationConf] = useState(null)

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
    const nameObject = {
      name: newNameTrim,
      number: newNumber
    }

    const notifBasicStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }

    if (persons.some(person => 
      person.name.toLowerCase() === newNameTrim.toLowerCase()
    )) {
      //alert(`${newNameTrim} is already added to phonebook`);
      if (window.confirm(`${newNameTrim} is already added to phonebook, replacethe old number with a new one?`)) {
        const idUpdate = persons.find(person => person.name.toLowerCase() === newNameTrim.toLowerCase()).id
        personService
        .update(idUpdate, nameObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== idUpdate ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotificationConf(
            {
              message: `Modified ${returnedPerson.name}`,
              style: { ...notifBasicStyle }
            }
          )
          setTimeout(() => {
            setNotificationConf(null)
          }, 4000)
        })
      }
      return
    }

    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setNotificationConf(
        {
          message: `Added ${returnedPerson.name}`,
          style: { ...notifBasicStyle }
        }
      )
      setTimeout(() => {
        setNotificationConf(null)
      }, 4000)
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
      <Notification notifConfiguration={notificationConf} />
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
