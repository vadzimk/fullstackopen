import React, {useState, useEffect} from "react";
import CountryView from "./CountryView";
import OutputList from "./OutputList";


const OutputView = ({matched_countries}) => {


    const [countryToShow, setCountryToShow] = useState(null)


    console.log("countryToShow", countryToShow)
    const handleShow = (country) => () => {
        setCountryToShow(country)
    }
    const displaySingleCounty = () => {
        if (matched_countries.length === 1) {
            setCountryToShow(matched_countries[0])

        } else if(matched_countries.length===0 ){
            setCountryToShow(null)  // clears up the state when no match
        }
    }

    useEffect(displaySingleCounty)  // could not update state in the component - caused infinite re-render, solved by putting it in useEffect

    if(countryToShow){
        return <CountryView country={countryToShow}/>
    } else{
        return <OutputList matched_countries={matched_countries} handleShow={handleShow}/>
    }

}

export default OutputView