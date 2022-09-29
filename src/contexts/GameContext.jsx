import { createContext, useContext, useState } from 'react'
import { useSavedGames } from '../contexts/SavedGamesContext'
import { createGame } from '../services/createGameService'
import { useLocation } from 'react-router-dom'
import { createObstacles } from '../services/createObstaclesService'

const GameContext = createContext({})

export function useGame() {
  return useContext(GameContext)
}

export function GameProvider({ children }) {
  const playerName = useLocation().state?.name
  const { selectedGame, saveGame } = useSavedGames()
  const [game, setGame] = useState(Object.entries(selectedGame).length != 0 ? selectedGame : createGame(playerName))

  //Functions for the player
  function movePlayer(direction) {
    const gameChanged = game

    if (game.pause === true) return setGame(gameChanged)
    if (gameChanged.player.ducked === true) return setGame(gameChanged)
    if (direction === 'ArrowLeft') {
      const newPosition = gameChanged.player.position - 1

      if (newPosition < 0 || isObstacleBlock(newPosition)) return setGame(game)
      gameChanged.player.position = newPosition
    }

    if (direction === 'ArrowRight') {
      const newPosition = gameChanged.player.position + 1

      if (newPosition > 4 || isObstacleBlock(newPosition)) return setGame(game)
      gameChanged.player.position = newPosition
    }
    return setGame(gameChanged)
  }
  function togglePlayerDucking(e) {
    if (e.repeat === true) return
    const gameChanged = game

    gameChanged.player.ducked = !game.player.ducked

    return setGame(gameChanged)
  }
  //Functions for gameplay
  function startNextLevel() {
    const gameChanged = game
    //Set's up the next level
    gameChanged.level += 1
    try {
      ;[gameChanged.obstacles.remaining, gameChanged.obstacles.delay, gameChanged.obstacles.speed] = createObstacles(gameChanged.level)
    } catch (e) {
      gameOver()
    }
    gameChanged.board.unshift(gameChanged.obstacles.remaining.shift())

    saveGame(gameChanged)

    return setGame(gameChanged)
  }
  function setMessage(message = undefined) {
    const gameChanged = game

    gameChanged.message = message
    gameChanged.pause = !gameChanged.pause

    return setGame(gameChanged)
  }
  function checkForTutorial() {
    if (game.level !== 0) return
    const gameChanged = game

    if (gameChanged.obstacles.remaining.length === 7) {
      gameChanged.obstacles.speed = 1000
      setGame(gameChanged)
      return setMessage('speed')
    }
    if (gameChanged.obstacles.remaining.length === 4) {
      gameChanged.obstacles.delay = 6
      setGame(gameChanged)
      return setMessage('delay')
    }
    if (gameChanged.board[0].duckable === true) {
      return setMessage('duck')
    }
  }
  function gameOver() {
    const gameChanged = game

    gameChanged.over = true
    setMessage('finished')

    return setGame(gameChanged)
  }
  //Functions for the obstacles
  function addObstacle() {
    const gameChanged = game

    const obstacle = gameChanged.obstacles.remaining.shift()
    gameChanged.board.unshift(obstacle)
    checkForTutorial()

    return setGame(gameChanged)
  }
  function changeObstaclesPosition(boardLength) {
    const gameChanged = game

    if (gameChanged.obstacles.remaining.length === 0 && gameChanged.board.length === 0) setMessage('win')
    gameChanged.board.forEach(obstacle => {
      obstacle.rowPosition++
      checkCollision(obstacle, boardLength)
      if (obstacle.rowPosition >= boardLength) gameChanged.board.pop()
    })

    return setGame(gameChanged)
  }
  function checkCollision(obstacle, boardLength) {
    const gameChanged = game

    if (obstacle.rowPosition !== boardLength - 2) return
    if (obstacle.colPositions.some((position, i) => i === gameChanged.player.position && position === true)) {
      if (obstacle.duckable === false || (obstacle.duckable === true && gameChanged.player.ducked === false)) {
        setMessage('lose')
      }
    }

    return setGame(gameChanged)
  }
  function isObstacleBlock(position) {
    const obstacleToCheck = game.board[game.board.length - 1]

    if (obstacleToCheck.rowPosition != 7) return false
    if (obstacleToCheck.colPositions.some((p, i) => i === position && p === true)) return true

    return false
  }
  return (
    <GameContext.Provider value={{ game, movePlayer, togglePlayerDucking, addObstacle, changeObstaclesPosition, startNextLevel, setMessage }}>
      {children}
    </GameContext.Provider>
  )
}
