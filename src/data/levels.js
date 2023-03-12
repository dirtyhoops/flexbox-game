// 1. 'rocks-allignment-1' : flex-end

const levels = {
  1: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-1',
    rocksCount: 2,
    rocksAlignment: 'rocks-alignment-1',
    answer: 'flex-start'
  },
  2: {
    shipsCount: 2,
    shipsAlignment: 'ships-alignment-2',
    rocksCount: 2,
    rocksAlignment: 'rocks-alignment-2',
    answer: 'space-between'
  }
};

const convertFromClass = {
  "ships-alignment-2": "flex-start",
  "ships-alignment-1": "flex-end",
  "ships-alignment-4": "center",
  "ships-alignment-3": "space-between",
  "ships-alignment-6": "space-around",
  "ships-alignment-5": "space-evenly"
}

module.exports = { levels, convertFromClass }