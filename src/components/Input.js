import { useState } from 'react';

const Input = ({ setShipStyling, isModalOpen, currentLevel }) => {
  const [inputValue, setInputValue] = useState('');
  // possibleAnswers is both used to verify that the user input matches one of the six justify-content property
  // settings, but it's also used to pass in the proper class name that contains the corresponding styling.
  const possibleAnswers = {
    'flex-start': 'ships-alignment-2',
    'flex-end': 'ships-alignment-1',
    'center': 'ships-alignment-4',
    'space-between': 'ships-alignment-3',
    'space-around': 'ships-alignment-6',
    'space-evenly': 'ships-alignment-5'
  };

  // Clears the input when the modal is active
  if (isModalOpen && inputValue !== '') {
    setInputValue('');
  }

  function updateUserInput(e) {
    // Maintain the controlled component state here in <Input/>, but if the value
    // actually matches a possible 'justify-content:' setting, change the class on the ships container
    // to the corresponding class by updating state - with a useState setting function 'setShipStyling'
    // coming from App.js.
    if (!possibleAnswers[e.target.value]) {
      setInputValue(e.target.value);
    } else {
      setShipStyling(possibleAnswers[e.target.value]);
      setInputValue(e.target.value);
    }
  }

  return (
    <div>
      <p className='user-prompt'>
        Which 'justify-content' setting <br />
        will help the boats avoid the rocks?
      </p>
      <textarea
        type='text'
        className='user-input'
        onChange={updateUserInput}
        value={inputValue}
      ></textarea>
      <p className='user-prompt'>Current Level: {currentLevel}/6</p>
    </div>
  );
};

export default Input;
