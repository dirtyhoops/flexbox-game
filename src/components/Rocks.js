import React from 'react';

const Rocks = ({ rocksCount, rocksAlignment }) => {
  return (
    <div className={`rocks ${rocksAlignment}`}>
      {/* <div className='rocks'> */}
      {Array.from({ length: rocksCount }, (_, i) => (
        <div key={i} className='rock'>
          {i}
        </div>
      ))}
      {/* <div className='rock'></div> */}
    </div>
  );
};

export default Rocks;
