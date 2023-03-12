import React from 'react';

import Ships from './Ships';
import Rocks from './Rocks';

const Board = ({ gameLevel, startGame, numOfShips, shipPositions }) => {
  return (
    <div className='board-container'>
      <div className='board-container-inner-wrapper'>
        <Ships startGame={startGame} positions={shipPositions} numOfShips={numOfShips}/>
        <Rocks
          rocksCount={gameLevel.rocksCount}
          rocksAllignment={gameLevel.rocksAllignment}
        />
        {/* <p>ayoo</p> */}
      </div>
    </div>
  );
};

export default Board;
