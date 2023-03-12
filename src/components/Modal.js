import React, { useState } from 'react';

const Modal = ({
  isAnswerCorrect,
  upLevel,
  resetLevel,
  currentLevel,
  resetGame
}) => {
  const [message, setMessage] = useState(
    isAnswerCorrect
      ? currentLevel !== 6
        ? 'Good job your answer is correct'
        : 'Great job, you fisnihed all 6 levels!'
      : 'your answer is incorrect'
  );

  const handleNextLevel = () => {
    upLevel();
    resetLevel();
  };

  return (
    <div className='modal-wrapper'>
      <div className='modal-container'>
        {isAnswerCorrect ? (
          <>
            {currentLevel !== 6 ? (
              <>
                <img src={require('../assets/check.png')} alt='correct mark' />
                <p>Good job! Your answer is correct!</p>
                <button
                  className='modal-button'
                  onClick={() => handleNextLevel()}
                >
                  Continue to next level
                </button>
              </>
            ) : (
              <>
                <img
                  src={require('../assets/shiplogo.png')}
                  alt='incorrect mark'
                />
                <p>Great job! You fisnihed all 6 levels!</p>
                <button className='modal-button' onClick={() => resetGame()}>
                  Reset Game
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <img
              src={require('../assets/decline.png')}
              alt='finished game mark'
            />
            <p>Your answer is incorrect!</p>
            <button className='modal-button' onClick={() => resetLevel()}>
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
