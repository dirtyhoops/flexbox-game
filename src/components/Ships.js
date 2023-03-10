import React from 'react';

const Ships = ({ startGame }) => {
  return (
    // <div className='ships'>
    <div className={`ships ${startGame ? 'movedown' : ''}`}>
      <div className='ship'></div>
      <div className='ship'></div>
    </div>
  );
};

export default Ships;
