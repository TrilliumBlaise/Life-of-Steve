import { useEffect, useState } from 'react'
import { useGame } from '../contexts/GameContext'
import { PlayerCol } from './PlayerCol'

export function PlayerRow() {
  const { game, movePlayer, togglePlayerDucking } = useGame()
  const [playerPosition, setPlayerPosition] = useState(game.player.position)
  const [playerCols, setPlayerCols] = useState([false, false, false, false, false])

  for (let i = 0; i < playerCols.length; i++) {
    if (i === playerPosition) playerCols[i] = true
    else playerCols[i] = false
  }
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        movePlayer(e.key)
        setPlayerPosition(game.player.position)
      }
      if (e.key === 'ArrowDown') {
        togglePlayerDucking(e)
      }
    }
    function handleKeyUp(e) {
      if (e.key === 'ArrowDown') {
        togglePlayerDucking(e)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="player-row">
      {playerCols.map((col, i) => (
        <PlayerCol key={i} hasPlayer={col} />
      ))}
    </div>
  )
}
