import React from 'react';

const Ships = ({ startGame, numOfShips, positions }) => {
  const ships = new Array(numOfShips).fill("")
  const shipsCSS = {
    0: "starting-position",
    1: "starting-position down-one",
    2: "starting-position down-two",
    3: "starting-position down-three",
    4: "starting-position down-four",
    5: "starting-position down-five",
    6: "starting-position down-six",
    7: "starting-position down-seven",
  }
  return (
    <div className={startGame? shipsCSS[positions]: 'starting-position'}>
      {ships.map((ship, index) => {
        return (
          <div className='ship' key={index}></div>
        )
      })}
    </div>
  );
};

export default Ships;
