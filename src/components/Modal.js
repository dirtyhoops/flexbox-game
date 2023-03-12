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
        <p>{message}</p>
        {isAnswerCorrect ? (
          <>
            {currentLevel !== 6 ? (
              <button onClick={() => handleNextLevel()}>
                Continue to next level
              </button>
            ) : (
              <button onClick={() => resetGame()}>Reset Game</button>
            )}
          </>
        ) : (
          <button onClick={() => resetLevel()}>Try Again</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
