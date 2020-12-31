import React, {useState} from "react";
import CountryView from "./CountryView";


export const OutputList = ({matched_countries, handleShow}) => {

    if (matched_countries.length > 10) {
        return <div>"Too many matches, specify another filter"</div>
    } else if (matched_countries.length > 1) {
        return matched_countries.map(country =>
            <div key={country.name}>{country.name}
                <button onClick={handleShow(country)}>show</button>
            </div>)
    } else {
        return null

    }

}

export default OutputList