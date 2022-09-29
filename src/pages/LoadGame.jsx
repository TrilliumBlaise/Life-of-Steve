import { LinkButton } from '../components/LinkButton'
import { Button } from '../components/Button'
import { SavedGameButton } from '../components/SavedGameButton'
import { useSavedGames } from '../contexts/SavedGamesContext'

export function LoadGame() {
  const { selectedGame, savedGames, deleteGame } = useSavedGames()

  return (
    <div id="load-screen" className="container">
      <canvas></canvas>
      <h1>Saved Games</h1>
      <div className="saved-games-list">
        {savedGames.length > 0 && savedGames.map((game, i) => <SavedGameButton key={i} name={game.player.name} level={game.level} />)}
      </div>
      <div className="buttons">
        {Object.entries(selectedGame).length != 0 && <LinkButton id="load" message="LOAD" path="/game-screen" />}
        <Button id="delete" message="DELETE" callback={() => deleteGame(selectedGame.id)} />
        <LinkButton id="return" message="RETURN" path="/" />
      </div>
    </div>
  )
}
