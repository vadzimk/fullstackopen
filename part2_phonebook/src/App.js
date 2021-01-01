import React, {useState, useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import mid from "./services/middleware";

const App = () => {
    const [persons, setPersons] = useState([])

    const fetchData = () => {
        console.log('starting to fetch data...')
        mid.getAll().then(data => setPersons(data)).catch((reason)=>alert(`getAll rejected ${reason}`))
    }
    useEffect(fetchData, [])


    const [newName, setNewName] = useState('')  // controls form input element
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const personsToShow = persons.filter(item => item.name.toLowerCase().search(searchName.toLowerCase()) !== -1)


    const addPerson = (e) => {
        e.preventDefault()
        const match = persons.filter(item => item.name === newName)
        // console.log(match)
        if (match.length === 0 && newNumber !== '') {
            let newPersonObj = {
                name: newName,
                number: newNumber
            }
            mid.createNew(newPersonObj).then((data)=>setPersons(persons.concat(data)))

            setNewName('')
            setNewNumber('')
        } else if (match.length !== 0) {
            window.alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={searchName} onChange={e => setSearchName(e.target.value)}/>
            <h3>add new</h3>
            <PersonForm onSubmit={addPerson} namevalue={newName} namechange={e => setNewName(e.target.value)}
                        numbervalue={newNumber} numberchange={e => setNewNumber(e.target.value)}/>
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow}/>
        </div>

    )
}

export default App