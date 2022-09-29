import { breakpoints } from '../data/breakpoints'
import { obstacles } from '../data/obstacles'

export function createObstacles(level) {
  try {
    const { numberOfObstacles, delay, speed } = breakpoints[`level${level}`]
    if (level === 0) return [tutorialObstacles(numberOfObstacles, level), delay, speed]
    const obstacles = []
    for (let i = 0; i < numberOfObstacles; i++) {
      const obstacle = {
        rowPosition: 0,
      }
      ;[obstacle.type, obstacle.colPositions, obstacle.duckable] = createRandomObstacle(i, level)
      obstacles.push(obstacle)
    }
    return [obstacles, delay, speed]
  } catch (e) {
    return false
  }
}

function createRandomObstacle(index, level) {
  const obstacle = obstacles[Math.floor(Math.random() * (obstacles.length - 1))]
  //This should prevent the first 5 obstacles from a duckable one on the first level
  if (level === 0 && obstacle.id === 0 && index < 5) return createRandomObstacle(index)
  return [obstacle.id, obstacle.positions, obstacle.duckable]
}

function tutorialObstacles(numberOfObstacles, level) {
  const tutorialObstacles = []
  for (let i = 0; i < numberOfObstacles - 1; i++) {
    const obstacle = {
      rowPosition: 0,
    }
    ;[([obstacle.type, obstacle.colPositions, obstacle.duckable] = createRandomObstacle(i, level))]
    if (obstacle.id === 0) obstacle.id += 1
    tutorialObstacles.push(obstacle)
  }
  const finalObstacle = {
    rowPosition: 0,
  }
  finalObstacle.type = obstacles[0].id
  finalObstacle.colPositions = obstacles[0].positions
  finalObstacle.duckable = obstacles[0].duckable
  tutorialObstacles.push(finalObstacle)
  return tutorialObstacles
}
