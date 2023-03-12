import React, { useState, useEffect } from 'react';
import { levels, convertFromClass } from './data/levels';
import useInterval from './hooks/useInterval';

import Board from './components/Board';
import Input from './components/Input';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [shipDistance, setShipDistance] = useState(0);
  const [shipsMoving, setShipsMoving] = useState(false);
  const [defaultPosition, setDefaultPosition] = useState(
    levels[currentLevel].shipsAlignment
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  function upLevel() {
    // Called to update the current level. Will trigger useEffect() to call setDefaultPosition()
    // setCurrentLevel(current => {
    //   if (current < 5) {
    //     console.log('yooo it his this');
    //     return current + 1;
    //   } else {
    //     // game has been completed! Hooray! trigger a modal, or something, or prompt the user to start over?
    //     console.log('You beat the game!');
    //   }
    // });
    setCurrentLevel(currentLevel + 1);

    // closes the modal
    setIsModalOpen(false);
  }

  // Initialize the start of the ships movement
  function beginLevel() {
    setStartGame(true);
    setShipsMoving(true);
  }

  // Resets the game to level 1
  function resetGame() {
    resetLevel();
    setCurrentLevel(1);
  }

  // Resets the level
  function resetLevel() {
    // shipDistance set to 0
    // shipsMoving set to false
    // defaultPosition set to levels[currentLevel].s
    // startGame set to false
    setShipDistance(0);
    setShipsMoving(false);
    setDefaultPosition(levels[currentLevel].shipsAlignment);
    setStartGame(false);

    // closes the modal
    setIsModalOpen(false);
  }

  useInterval(
    () => {
      // custom hook for managing setInterval() inside of React
      // if the ship hasn't reached the bottom
      if (shipDistance < 7) {
        // keep moving it down one at a time
        setShipDistance(shipDistance + 1);
      } else {
        // otherwise stop the ships motion, and check if the user has given the correct answer
        setShipsMoving(false);

        // open the modal
        setIsModalOpen(true);

        if (
          convertFromClass[defaultPosition] === levels[currentLevel][`answer`]
        ) {
          setIsAnswerCorrect(true);
          console.log('yessir');
        }

        // try to implement this inside modal
        // if (
        //   convertFromClass[defaultPosition] === levels[currentLevel][`answer`]
        // ) {
        //   upLevel();
        //   resetLevel();
        //   // let the user know they guessed correctly, reset positions,
        //   // and update the UI to show the next level
        //   console.log('correct answer! ready for the next level?');
        // } else {
        //   // let the user know they guessed incorrectly, and reset the level
        //   resetLevel();
        //   console.log('wrong answer, try again');
        // }
      }
      // change '1000' to whatever milliseconds you want for ship speed
    },
    shipsMoving ? 1300 : null
  );

  useEffect(() => {
    // This makes sure that upon load that the css for the ships is in the default position for that puzzle
    // each puzzle needs the ships to start at a different position. Also sets it any time the level is changed.
    setDefaultPosition(levels[currentLevel].shipsAlignment);
  }, [currentLevel]);

  return (
    <div className='app-wrapper'>
      {isModalOpen && (
        <Modal
          upLevel={upLevel}
          resetLevel={resetLevel}
          isAnswerCorrect={isAnswerCorrect}
          currentLevel={currentLevel}
          resetGame={resetGame}
        />
      )}

      <div className='container'>
        <Board
          gameLevel={levels[currentLevel]}
          startGame={startGame}
          shipDistance={shipDistance}
          numOfShips={levels[currentLevel]['shipsCount']}
          defaultPosition={defaultPosition}
        />
        <Input setShipStyling={setDefaultPosition} isModalOpen={isModalOpen} />
      </div>
      {!startGame && (
        <button className='start-button' onClick={() => beginLevel()}>
          Start
        </button>
      )}
    </div>
  );
};

export default App;
