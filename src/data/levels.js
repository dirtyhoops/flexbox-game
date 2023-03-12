const levels = {
  1: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-1',
    answer: 'flex-start',
    rocksPlacement: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  2: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-2',
    rocksPlacement: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    answer: 'flex-end'
  },
  3: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-2',
    rocksPlacement: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    answer: 'space-between'
  },
  4: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-4',
    rocksPlacement: [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    answer: 'space-around'
  },
  5: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-3',
    rocksPlacement: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    answer: 'center'
  },
  6: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-4',
    rocksPlacement: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    answer: 'space-evenly'
  }
};

const convertFromClass = {
  'ships-alignment-1': 'flex-end',
  'ships-alignment-2': 'flex-start',
  'ships-alignment-3': 'space-between',
  'ships-alignment-4': 'center',
  'ships-alignment-5': 'space-evenly',
  'ships-alignment-6': 'space-around'
};

module.exports = { levels, convertFromClass };
