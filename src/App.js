import React, { useState } from 'react';
import { levels } from './data/levels';

import Board from './components/Board';
import Input from './components/Input';
import './App.css';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);

  const upLevel = () => {
    setCurrentLevel(current => {
      if(current < 5){
        return current + 1
      }else{
        // game has been completed! Hooray!
      }
    })
  }
  const checkUserInput = (e) => {
    if(e.target.value === levels[currentLevel].answer){
      upLevel()
    }
  }


  return (
    <div className='App'>
      <div className='container'>
        <Board gameLevel={levels[currentLevel]} startGame={startGame} />
        {/* <div className='board-container'>
          <div className={`ships ${startGame ? 'movedown' : ''}`}>
            <div className='ship'></div>
            <div className='ship'></div>
          </div>
          <div className='rocks'>
            <div className='rock'></div>
            <div className='rock'></div>
          </div>
        </div> */}
        <button onClick={() => setStartGame(true)}>Start Game</button>
        <button onClick={() => setCurrentLevel(1)}>LEVEL 1</button>
        < Input 
          checkAnswer={checkUserInput}
        />
      </div>
    </div>
  );
}

export default App;
