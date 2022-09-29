const NUMBER_OF_COLUMNS = 5
const STARTING_COLUMN_INDEX = Math.floor(NUMBER_OF_COLUMNS / 2)

export function createPlayer(name) {
  const player = {
    name,
    position: STARTING_COLUMN_INDEX,
    ducked: false,
  }

  return player
}
