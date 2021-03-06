import React, {useState, useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import mid from "./services/middleware";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])

    const fetchData = () => {
        console.log('starting to fetch data...')
        mid.getAll().then(data => setPersons(data)).catch((reason) => alert(`getAll rejected ${reason}`))
    }
    useEffect(fetchData, [])


    const [newName, setNewName] = useState('')  // controls form input element
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const [notificationMsg, setNotificationMsg] = useState('')
    const [isError, setIsError] = useState(false)
    const personsToShow = persons.filter(item => item.name.toLowerCase().search(searchName.toLowerCase()) !== -1)



    const addPerson = (e) => {
        e.preventDefault()
        const match = persons.filter(item => item.name === newName)
        // console.log(match)

        if (newNumber) {
            if (match.length === 0) {  // check if already exists in the list
                let newPersonObj = {
                    name: newName,
                    number: newNumber
                }
                mid.createNew(newPersonObj).then((data) => {
                    setPersons(persons.concat(data))
                    notify(`Added ${data.name}`)
                }).catch((err)=>notify(err.statusText,true))

            } else if (match.length === 1 && match[0].number !== newNumber && window.confirm(`${match[0].name} is already exists, replace number?`)) {
                let objToUpdate = match[0]
                mid.updatePerson(objToUpdate.id, {...objToUpdate, number: newNumber})
                    .then(data => {
                        setPersons(persons.map(item => item.id !== objToUpdate.id ? item : data))
                        notify(`Updated ${data.name}`)
                    }).catch((err)=>notify(`${objToUpdate.name} was removed from the server`, true))
            }
            setNewName('')
            setNewNumber('')

        }
    }

    const deletePerson = (id) => {
        if (window.confirm(`Delete ${persons.find(item => item.id === id).name}?`)) {  // window confirmation dialogue
            mid.deletePerson(id)
                .then(status => {
                    if(status === 200) {
                        let removedName = persons.find((person)=>person.id ===id ).name
                        setPersons(persons.filter(person => person.id !== id))
                        notify(`Deleted ${removedName}`)
                    }
                }).catch((err)=>notify(err.statusText, true))
        }
    }

    const notify=(msg, signalErr=false)=>{
        setNotificationMsg(msg)
        setIsError(signalErr)
        setTimeout(()=>setNotificationMsg(null), 5000)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notificationMsg} isError={isError}/>
            <Filter value={searchName} onChange={e => setSearchName(e.target.value)}/>
            <h3>add new</h3>
            <PersonForm onSubmit={addPerson} namevalue={newName} namechange={e => setNewName(e.target.value)}
                        numbervalue={newNumber} numberchange={e => setNewNumber(e.target.value)}/>
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
        </div>

    )
}

export default App