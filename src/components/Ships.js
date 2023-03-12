const Ships = ({ startGame, numOfShips, distance, userStyle, defaultPosition }) => {
  const ships = new Array(numOfShips).fill("")
  const shipsCSS = {
    0: `${defaultPosition}`,
    1: `${defaultPosition} down-one`,
    2: `${defaultPosition} down-two`,
    3: `${defaultPosition} down-three`,
    4: `${defaultPosition} down-four`,
    5: `${defaultPosition} down-five`,
    6: `${defaultPosition} down-six`,
    7: `${defaultPosition} down-seven`,
  }
  const userStyling = userStyle? userStyle + " ": "";
  return (
    <div className={userStyling + startGame? shipsCSS[distance]: defaultPosition}>
      {ships.map((ship, index) => {
        return (
          <div className='ship' key={index}></div>
        )
      })}
    </div>
  );
};

export default Ships;
