import { useEffect } from 'react'
import { useState } from 'react'
import { useGame } from '../contexts/GameContext'
import { BoardRow } from './BoardRow'
import { Message } from './Message'

export function GameBoard() {
  const { game, changeObstaclesPosition, addObstacle, setPaused } = useGame()
  //Not exactly sure how to do this "correctly"
  //This state is used entirely to cause this component to rerender and thus continue after pausing
  const [fake, setFake] = useState(true)
  const [count, setCount] = useState(0)
  const boardRows = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

  for (let i = 0; i < boardRows.length; i++) {
    const obstacle = game?.board?.find(obstacle => obstacle?.rowPosition === i)
    if (obstacle) boardRows[i] = obstacle
    else boardRows[i] = {}
  }
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Enter') {
        setPaused(prev => !prev)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (!game.pause) {
    if (count > game.obstacles.delay) setCount(0)
    setTimeout(() => {
      changeObstaclesPosition(boardRows.length)
      setCount(count + 1)
      if (game.obstacles.remaining.length > 0 && count === game.obstacles.delay) {
        addObstacle()
        setCount(0)
      }
    }, game.obstacles.speed)
  }

  return (
    <>
      {!game.over && (
        <div className="game-board">
          {boardRows.map((row, i) => {
            if (i === 7) return <BoardRow key={i} obstacle={row.colPositions} hasPlayer={true} />
            else return <BoardRow key={i} obstacle={row.colPositions} hasPlayer={false} />
          })}
        </div>
      )}
      {game.message && <Message message={game.message} setFake={setFake} />}
    </>
  )
}

/*

*/
