import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Statistics = ({good, neutral, bad, avg, all, positive}) => {
    if(all) {
        return (
            <table>
                <p><strong>statistics</strong></p>
                <Statistic text={'good'} value={good}/>
                <Statistic text={'neutral'} value={neutral}/>
                <Statistic text={'bad'} value={bad}/>
                <Statistic text={'all'} value={all}/>
                <Statistic text={'average'} value={avg}/>
                <Statistic text={'positive'} value={positive}/>
            </table>
        )
    }
    //conditional rendering
    return <p>No feedback given</p>
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