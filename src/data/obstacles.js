//Varibale for giving each obstacle an unique id
let id = 0
//The various configurations of the obstacles in the game
//Position numbers are the columns that Blocks are to go
//Position undefined are the columns that Game Tiles go.
export const obstacles = [
  {
    id: id++,
    positions: [true, true, true, true, true],
    duckable: true,
  },
  {
    id: id++,
    positions: [true, true, true, false, false],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, true, true, true, false],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, true, true, false, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, true, true, true, false],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, true, true, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, false, true, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, false, true, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, true, false, true, false],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, true, false, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, true, false, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, true, true, false, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, false, true, true, false],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, true, false, true, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [true, false, true, false, true],
    duckable: false,
  },
  {
    id: id++,
    positions: [false, true, false, true, false],
    duckable: false,
  },
]
