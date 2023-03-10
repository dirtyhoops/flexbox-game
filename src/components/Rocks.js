import React from 'react';

const Rocks = ({ rocksCount, rocksAllignment }) => {
  return (
    <div className={`rocks ${rocksAllignment}`}>
      {/* <div className='rocks'> */}
      {Array.from({ length: rocksCount }, (_, i) => (
        <div key={i} className='rock'>
          {i}
          <p>remove this later</p>
        </div>
      ))}

      {/* <div className='rock'></div> */}
    </div>
  );
};

export default Rocks;
