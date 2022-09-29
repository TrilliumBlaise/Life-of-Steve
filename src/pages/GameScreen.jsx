import { GameProvider } from '../contexts/GameContext'
import { GameBoard } from '../components/GameBoard'

export function GameScreen({ name }) {
  return (
    <GameProvider>
      <div id="game-screen" className="container">
        <canvas></canvas>
        <GameBoard />
      </div>
    </GameProvider>
  )
}
