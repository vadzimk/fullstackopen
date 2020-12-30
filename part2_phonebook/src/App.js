import React, {useState,useEffect} from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios'


const App = () => {
    const [persons, setPersons] = useState([])

    const fetchData=()=>{
        console.log('starting to fetch data...')
        const eventHandler =(response)=>{console.log('promise fulfilled', response); setPersons(response.data)}
        axios.get('http://127.0.0.1:3001/persons').then(eventHandler)
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