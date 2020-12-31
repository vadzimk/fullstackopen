
/** @param country is an object or null*/
const CountryView = ({country}) => {

    if (country) {
        return (<div>
            <h2>{country['name']}</h2>
            <div>capital {country['capital']}</div>
            <div>population {country['population'].toLocaleString()}</div>
            <div>
                <h3>languages</h3>
                <ul>
                    {country['languages'].map(lang => <li key={lang.name}>{lang.name}</li>)}
                </ul>
            </div>
            <div>
                <img src={country['flag']} width='100' alt={`flag of ${country.name}`}/>
            </div>
        </div>)
    } else {
        return null
    }
}

export default CountryView