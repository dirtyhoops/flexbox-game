import React from 'react';

import Ships from './Ships';
import Rocks from './Rocks';

const Board = ({ gameLevel, startGame }) => {
  return (
    <div className='board-container'>
      <Ships startGame={startGame} />
      <Rocks
        rocksCount={gameLevel.rocksCount}
        rocksAllignment={gameLevel.rocksAllignment}
      />
      {/* <p>ayoo</p> */}
    </div>
  );
};

export default Board;
