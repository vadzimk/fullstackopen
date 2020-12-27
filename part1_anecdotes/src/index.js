import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Stat = ({maxVotes, mostVotes}) => {
    if (maxVotes) {
        return (
            <div>
                <h3>Anecdote with most votes</h3>
                {mostVotes}<br/>
                has {maxVotes} votes
            </div>
        )
    } else {
        return null
    }
}
const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))  // zero filled array

    const mostVotesIndex = votes.indexOf(votes.reduce((x, y) => Math.max(x, y)))
    const maxVotes = votes[mostVotesIndex]
    const mostVotes = anecdotes[mostVotesIndex]

    // console.log("mostVotesIndex", mostVotesIndex)

    // console.log('votes', votes)
    const handleClick = () => {
        const newValue = Math.floor(Math.random() * anecdotes.length)
        setSelected(newValue)
    }

    const handleVote = () => {
        // correct way of updating component's state stored in mutable objects is to make a copy of the object
        const votesCopy = [...votes]
        votesCopy[selected] += 1
        setVote(votesCopy)
    }
    return (
        <div>
            <div>
                <h3>Andecdote of the day</h3>
                {props.anecdotes[selected]}<br/>
                has {votes[selected]} votes
            </div>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>
            <Stat {...{maxVotes, mostVotes}}/>

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))