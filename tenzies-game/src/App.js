/* IDEAS ------------>
 * CSS: put real dots in dice
 * track number of rolls
 * track time it took to win
 * save best time to local storage
 */


import { useEffect, useState, useRef } from 'react'
import Die from './Die'
import './styles.css'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)
  // const [seconds, setSeconds] = useState(0)
  // const [minutes, setMinutes] = useState(0)

  // const renders = useRef()
  // function setTimer() {
  //   renders.current = setInterval(() => {
  //     setSeconds(prevSeconds => prevSeconds+1)
  //   }, 1000);
  // }

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    
    if(allHeld && allSameValue) {
      setTenzies(true)
      console.log("You Won")
    }
    
  },[dice])

  function allNewDice() {
    let newArr = []
    while(newArr.length<10) {
      let r = Math.floor(Math.random() * 6) + 1
      newArr.push({
        value: r, 
        isHeld: false,
        id: nanoid()
      })
    }
    return newArr
  }

  function rollDice() {
    if (!tenzies) {
      setCount(oldCount => oldCount + 1)
      console.log(count)
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
          die :
          {
            value: Math.floor(Math.random() * 6) + 1, 
            isHeld: false,
            id: nanoid()
          }
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice)
      setCount(0)
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => 
    <Die 
      value = {die.value} 
      isHeld = {die.isHeld} 
      key={die.id} 
      holdDice = {() => holdDice(die.id)
    }/>)

  return (
    <main>
      {/* <span className = "count">
        {!tenzies && count}
      </span> */}
      {/* {!tenzies ? 
        <div className = "timer">
          {minutes < 10 ? "0"+minutes : minutes}:
          {seconds < 10 ? "0"+seconds : seconds}
        </div> :
        console.log("hello") */}
        {/* // reset second and minute
        //timer stops when dice roll occurs
      } */}
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className = "roll-dice" 
        onClick={() => {rollDice()}}>
          {!tenzies ? "Roll" : "New Game"}
      </button>
    </main>
  );
}

export default App;
