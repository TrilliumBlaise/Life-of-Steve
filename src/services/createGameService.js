import { createPlayer } from './createPlayerService'
import { createObstacles } from './createObstaclesService'

export function createGame(name) {
  const startingLevel = 0
  const game = {
    level: startingLevel,
    obstacles: {
      passed: 0,
    },
    board: [],
    player: useCreatePlayer(name),
    over: false,
    pause: false,
    message: undefined,
  }
  ;[game.obstacles.remaining, game.obstacles.delay, game.obstacles.speed] = useCreateObstacles(startingLevel)
  game.board.unshift(game.obstacles.remaining.shift())
  return game
}
