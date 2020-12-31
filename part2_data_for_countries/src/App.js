import React, {useEffect, useState} from 'react'
import axios from "axios";
import InputField from "./components/InputField";
import OutputView from "./components/OutputView";

const App = () => {
    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])

    // after data are fetched component rerenders and variable countries carries data
    const matched_countries = searchCountry ? countries.filter(item => item.name.toLowerCase().search(searchCountry.toLowerCase()) !== -1) : []


    const fetchData = () => {
        console.log('start fetching data...')
        const handleEvent = (res) => {
            console.log('promise fulfilled', res);
            setCountries(res.data)  // updates state -> triggers re-render of the component, data are rendered to the screen
        }
        axios.get('https://restcountries.eu/rest/v2/all').then(handleEvent)
    }


    useEffect(fetchData, [])

    return (
        <div>
            <InputField value={searchCountry} onChange={e => setSearchCountry(e.target.value)}/>
            <OutputView matched_countries={matched_countries}/>
        </div>
    )
}

export default App