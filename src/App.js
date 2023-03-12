import React, { useState, useRef } from 'react';
import { levels } from './data/levels';
import useInterval from './useInterval';

import Board from './components/Board';
import Input from './components/Input';
import './App.css';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [shipPositions, setShipPositions] = useState(0);
  const [shipsMoving, setShipsMoving] = useState(false);
  const [userAnswer, setUserAnswer] = useState("justify-content: ");

  const upLevel = () => {
    setCurrentLevel(current => {
      if(current < 5){
        return current + 1
      }else{
        // game has been completed! Hooray!
        console.log("You beat the game!")
      }
    })
  }

  function beginLevel(){
    setStartGame(true)
    setShipsMoving(true)
  }

  useInterval(() => {
    if(shipPositions < 7){
      setShipPositions(shipPositions + 1)
    }else{
      setShipsMoving(false)
      if(userAnswer === levels[currentLevel].answer){
        upLevel()
        console.log('level complete')
      }else{
        console.log("wrong answer, try again")
      }
    }
  }, shipsMoving? 1000: null);

  return (
    <div className='App'>
      <div className='container'>
        <Board 
          gameLevel={levels[currentLevel]} 
          startGame={startGame} 
          shipPositions={shipPositions} 
          numOfShips={levels[currentLevel]['shipsCount']}
          />
        <button onClick={() => beginLevel()}>Start</button>
        < Input 
          updateAnswer={setUserAnswer}
          currentAnswer={userAnswer}
        />
      </div>
    </div>
  );
}

export default App;
