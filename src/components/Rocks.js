import React from 'react';

const Rocks = ({ rocksPlacement }) => {
  return (
    // <div className={`rocks ${rocksAlignment}`}>
    //   {Array.from({ length: rocksCount }, (_, i) => (
    //     <div key={i} className='rock'>
    //       {i}
    //     </div>
    //   ))}
    // </div>
    <div className='rocks'>
      {rocksPlacement.map((rock, idx) => (
        <div
          key={idx}
          className={`rock ${rock === 1 ? 'rock-show' : 'rock-hide'} `}
        ></div>
      ))}
    </div>
  );
};

export default Rocks;
