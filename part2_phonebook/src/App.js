import React, {useState} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";


const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')  // controls form input element
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const personsToShow = persons.filter(item => item.name.toLowerCase().search(searchName.toLowerCase()) !== -1)


    const addPerson = (e) => {
        e.preventDefault()
        const match = persons.filter(item => item.name === newName)
        // console.log(match)
        if (match.length === 0 && newNumber !== '') {
            let newPersonObj = {name: newName, number: newNumber}
            setPersons(persons.concat(newPersonObj))
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
            <PersonForm onSubmit={addPerson} namevalue={newName} namechange={e => setNewName(e.target.value)} numbervalue={newNumber} numberchange={e => setNewNumber(e.target.value)}/>
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow}/>
        </div>

    )
}

export default App