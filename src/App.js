import React, { useState, useEffect } from 'react';
import { levels } from './data/levels';
import useInterval from './hooks/useInterval';

import Board from './components/Board';
import Input from './components/Input';
import './App.css';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [shipDistance, setShipDistance] = useState(0);
  const [shipsMoving, setShipsMoving] = useState(false);
  const [defaultPosition, setDefaultPosition] = useState(levels[currentLevel].shipsAlignment);

  function upLevel(){
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

  function resetLevel(){
    // to reset:
    // shipDistance set to 0
    // shipsMoving set to false
    // defaultPosition set to levels[currentLevel].shipAlignment
    // startGame set to false
  }

  useInterval(() => {
    if(shipDistance < 7){
      setShipDistance(shipDistance + 1)
    }else{
      setShipsMoving(false)
      if(defaultPosition === levels[currentLevel].answer){
        upLevel()
        console.log('correct answer! ready for the next level?')
      }else{
        console.log("wrong answer, try again")
      }
    }
  }, shipsMoving? 1000: null);

  useEffect(() => {
    setDefaultPosition(levels[currentLevel].shipsAlignment)
  }, [currentLevel])
  
  return (
    <div className='App'>
      <div className='container'>
        <Board 
          gameLevel={levels[currentLevel]} 
          startGame={startGame} 
          shipDistance={shipDistance} 
          numOfShips={levels[currentLevel]['shipsCount']}
          defaultPosition={defaultPosition}
          />
        < Input 
          setShipStyling={setDefaultPosition}
        />
      </div>
      {!startGame && <button className="start-button" onClick={() => beginLevel()}>Start</button>}
    </div>
  );
}

export default App;
