import { useSavedGames } from '../contexts/SavedGamesContext'

export function SavedGameButton({ name, level }) {
  const { loadGame } = useSavedGames()

  function handleOnClick() {
    document.querySelector('.selected-game')?.classList.remove('selected-game')
    document.getElementById(`${id}`).classList.add('selected-game')
    loadGame(name)
  }

  return (
    <button onClick={handleOnClick} className="saved-game" id={name}>
      <span style={{ textAlign: 'center', pointerEvents: 'none' }}>Name: {name}</span>
      <span style={{ textAlign: 'center', pointerEvents: 'none' }}>Level: {level}</span>
    </button>
  )
}
