const Rocks = ({ rocksPlacement }) => {
  // Displays/Hides the rocks depending on the rockPlacement array (1 = shows rock, 0 = hides rock)
  return (
    <div className='rocks'>
      {rocksPlacement.map((rock, idx) => (
        <div key={idx} className={`rock ${rock === 0 && 'rock-hide'} `}></div>
      ))}
    </div>
  );
};

export default Rocks;
