import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const StatLine = ({text, value}) => <div>{text} {value}</div>
const Statistics = ({good, neutral, bad, avg, all, positive}) => {
    return (
        <div>
            <p><strong>statistics</strong></p>
            <StatLine text={'good'} value={good}/>
            <StatLine text={'neutral'} value={neutral}/>
            <StatLine text={'bad'} value={bad}/>
            <StatLine text={'all'} value={all}/>
            <StatLine text={'average'} value={avg}/>
            <StatLine text={'positive'} value={positive}/>
        </div>
    )
}

const App = () => {
    //save clicks of each button to its own sate
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const avg = all && (good * 1 + neutral * 0 + bad * (-1)) / all
    // console.log('all', all)
    // console.log('avg', avg)
    const positive = Number(all && (good * 100) / all).toString().concat(' %')
    // console.log('positive', positive)
    const stats = {good, neutral, bad, avg, all, positive}

    const setToValue = (newValue, setStatefunc) => () => setStatefunc(newValue)
    return (
        <div>
            <p><strong>give feedback</strong></p>
            <Button text={'good'} handleClick={setToValue(good + 1, setGood)}/>
            <Button text={'neutral'} handleClick={setToValue(neutral + 1, setNeutral)}/>
            <Button text={'bad'} handleClick={setToValue(bad + 1, setBad)}/>
            {/*transfer props to child components, pass all props object destructuring*/}
            {/* spread in object literal copies properties in a new object, than in child-object do object destructuring*/}
            <Statistics {...stats}/>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))