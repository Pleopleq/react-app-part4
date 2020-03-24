import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = (props) =>{
  return (
    <p> {props.feed}</p>
  )
}

const Statistics = ({good, neutral, bad }) =>{
  let AllVotes = good + neutral + bad;

  if(!AllVotes){
    return<p>No feedback given</p>
  }else {
    return (
    <div>
    <p>All: {AllVotes}</p>
    <p>Average: {(AllVotes)/3}</p>
    <p>Positive: {good/ AllVotes*100}</p>
    </div>
    )
  }
}



const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good +1);
  const increaseNeutral = () => setNeutral(neutral +1);
  const increaseBad = () => setBad(bad +1);

  return (
    <div>
    <h1>Give feedback</h1>
      <div>
        <Display feed={good}/>
        <Button text='Good' onClick={increaseGood}/>
      </div>
      <div>
        <Display feed={neutral}/>
        <Button text='Neutral' onClick={increaseNeutral}/>
      </div>
      <div>
        <Display feed={bad}/>
        <Button text='Bad' onClick={increaseBad}/>
      </div>
      <Statistics good={good} neutral={neutral}  bad={bad}/>
    </div>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

