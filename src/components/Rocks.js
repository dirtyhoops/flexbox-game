import React from 'react';

const Rocks = ({ rocksCount, rocksAllignment, rocksPlacement }) => {
  return (
    // <div className={`rocks ${rocksAllignment}`}>
    //   {/* <div className='rocks'> */}
    //   {Array.from({ length: rocksCount }, (_, i) => (
    //     <div key={i} className='rock'>
    //       {i}
    //       <p>remove this later</p>
    //     </div>
    //   ))}

    //   {/* <div className='rock'></div> */}
    // </div>
    <div className={`rocks ${rocksAllignment}`}>
      {rocksPlacement.map((rock, idx) => (
        <div
          key={idx}
          className={`rock ${rock === 1 ? 'rock-show' : 'rock-hide'} `}
        >
          <p>{rock}</p>
        </div>
      ))}
    </div>
  );
};

export default Rocks;
