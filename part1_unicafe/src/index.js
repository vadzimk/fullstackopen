import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button =({text, handleClick})=><button onClick={handleClick}>{text}</button>
const StatLine = ({text, value})=><div>{text} {value}</div>

const App =()=>{
    //save clicks of each button to its own sate
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToValue = (newValue, setStatefunc)=>()=>setStatefunc(newValue)
    return(
        <div>
            <p><strong>give feedback</strong></p>
            <Button text={'good'} handleClick={setToValue(good+1, setGood)}/>
            <Button text={'neutral'} handleClick={setToValue(neutral+1, setNeutral)}/>
            <Button text={'bad'} handleClick={setToValue(bad+1, setBad)}/>

            <p><strong>statistics</strong></p>
            <StatLine text={'good'} value={good}/>
            <StatLine text={'neutral'} value={neutral}/>
            <StatLine text={'bad'} value={bad}/>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))