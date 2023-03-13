import React from 'react';

import Ships from './Ships';
import Rocks from './Rocks';

const Board = ({
  gameLevel,
  startGame,
  numOfShips,
  shipDistance,
  defaultPosition
}) => {
  return (
    <div className='board-container'>
      <div className='board-container-inner-wrapper'>
        <Ships
          defaultPosition={defaultPosition}
          startGame={startGame}
          distance={shipDistance}
          numOfShips={numOfShips}
        />
        <Rocks rocksPlacement={gameLevel.rocksPlacement} />
        {/* <p>ayoo</p> */}
      </div>
    </div>
  );
};

export default Board;
