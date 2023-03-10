import React, { useState } from 'react';
import { levels } from './data/levels';

import Board from './components/Board';
import './App.css';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [gameLevels, setGameLevels] = useState(levels);
  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <div className='App'>
      <div className='container'>
        <Board gameLevel={gameLevels[currentLevel]} startGame={startGame} />
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
        <button onClick={() => setCurrentLevel(2)}>LEVEL 2</button>
      </div>
    </div>
  );
}

export default App;
