import React from "react";

export const OutputList = ({countries}) => {
    let s
    if (countries.length > 10) {
        s = "Too many matches, specify another filter"
    } else if (countries.length === 1) {
        let c = countries[0]
        s = (<div>
            <h2>{c['name']}</h2>
            <div>capital {c['capital']}</div>
            <div>population {c['population'].toLocaleString()}</div>
            <div>
                <h3>languages</h3>
                <ul>
                    {c['languages'].map(lang => <li key={lang.name}>{lang.name}</li>)}
                </ul>
            </div>
            <div>
                <img src={c['flag']} width='100' alt={`flag of ${c.name}`}/>
            </div>
        </div>)
    } else {
        s = countries.map(country => <div key={country.name}>{country.name}</div>)
    }

    return (
        <div>{s}</div>
    )
}

export default OutputList