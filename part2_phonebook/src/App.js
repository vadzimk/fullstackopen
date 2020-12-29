
import React, {useState} from "react";

const App =()=>{
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')  // controls form input element
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const personsToShow =()=>persons.filter(item=>item.name.toLowerCase().search(searchName.toLowerCase()) !==-1)


    const addPerson =(e)=>{
        e.preventDefault()
        const match = persons.filter(item=>item.name === newName)
        // console.log(match)
        if(match.length===0 && newNumber !=='') {
            let newPersonObj = {name: newName, number: newNumber}
            setPersons(persons.concat(newPersonObj))
            setNewName('')
            setNewNumber('')
        } else if(match.length !==0) {
            window.alert(`${newName} is already added to phonebook`)
        }

    }

    // const handleChange=(e)=>{
    //     setNewName(e.target.value)
    // }

    return(
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with: <input value={searchName} onChange={e=>setSearchName(e.target.value)}/>
            </div>
            <h2>add new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={e=>setNewName(e.target.value)}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={e=>setNewNumber(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {personsToShow().map(person=>
                    <div key={person.name}>{person.name} {person.number}</div>)}
            </div>
        </div>
    )
}

export default App