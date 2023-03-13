const Ships = ({ startGame, numOfShips, distance, defaultPosition }) => {
  const ships = new Array(numOfShips).fill('');
  // Each position 0-7 represents a vertical position of the ships containing element.
  // To move the ship down the screen, swap out the classes down-one for down-two, and so on.
  // defaultPosition can be either the starting position given for the puzzle, or the
  // Modified position written in the textarea element by the player.
  const shipsCSS = {
    0: `${defaultPosition}`,
    1: `${defaultPosition} down-one`,
    2: `${defaultPosition} down-two`,
    3: `${defaultPosition} down-three`,
    4: `${defaultPosition} down-four`,
    5: `${defaultPosition} down-five`,
    6: `${defaultPosition} down-six`,
    7: `${defaultPosition} down-seven`
  };

  return (
    <div
      className={`ships ${startGame ? shipsCSS[distance] : defaultPosition}`}
    >
      {ships.map((ship, index) => {
        return <div className='ship' key={index}></div>;
      })}
    </div>
  );
};

export default Ships;
