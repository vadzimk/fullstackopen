import React, {useState, useEffect} from 'react'
import axios from "axios";


/** @param country is an object or null*/
const CountryView = ({country}) => {

    const [weather, setWeather] = useState(null)
    const capital = country['capital']

    const fetchWeather = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
            .then(res => {
                console.log("res.data", res.data)
                return setWeather(
                    {
                        temperature: `${res.data.current.temperature} Celsius`,
                        weather_icons: res.data.current.weather_icons,
                        wind_speed: `${res.data.current.wind_speed} kilometers/hour`,
                        wind_dir: `direction ${res.data.current.wind_dir}`
                    }
                )
            })
            .catch(() => setWeather({temperature: "api request failed"}))
    }

    useEffect(fetchWeather, [capital])

    if (country) {
        return (<div>
            <h2>{country['name']}</h2>
            <div>capital {capital}</div>
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
            <h3>Weather in {capital}</h3>
            <div>temperature: {weather ? weather.temperature : ""}</div>
            <div>
                {weather ? (weather.weather_icons.map(icon=>
                    <img src={icon} width='50' alt="" key={icon}/>
                    )) : ""}
            </div>
            <div>
                wind: {weather ? `${weather.wind_speed} ${weather.wind_dir}` : ""}
            </div>
        </div>)
    } else {
        return null
    }
}

export default CountryView