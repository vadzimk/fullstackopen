
import React, {useState} from "react";

const App =()=>{
    const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')  // controls form input element


    const addPerson =(e)=>{
        e.preventDefault()
        const match = persons.filter(item=>item.name === newName)
        // console.log(match)
        if(match.length===0) {
            setPersons(persons.concat({name: newName}))
        } else {
            window.alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
    }

    const handleChange=(e)=>{
        setNewName(e.target.value)
    }

    return(
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person=>
                    <div key={person.name}>{person.name}</div>)}
            </div>
        </div>
    )
}

export default App