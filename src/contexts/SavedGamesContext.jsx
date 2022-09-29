import { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { SavedGamesData } from '../data/SavedGames'

const SavedGamesContext = createContext({})
export function useSavedGames() {
  return useContext(SavedGamesContext)
}

export function SavedGamesProvider({ name, children }) {
  const LOCAL_STORAGE_KEY = `${name}-game-saves`
  const [savedGames, setSavedGames] = useLocalStorage(LOCAL_STORAGE_KEY, [])
  const [selectedGame, setSelectedGame] = useState({})

  function loadGame(name) {
    setSelectedGame(savedGames.find(game => game.player.name === name))
    return selectedGame
  }

  function saveGame(newGame) {
    if (savedGames.find(game => game.player.name === newGame.player.name)) return updateGame
    setSavedGames([...savedGames, newGame])
    return savedGames
  }

  function deleteGame(name) {
    const filteredSavedGames = savedGames.filter(game => game.player.name != name)

    setSavedGames(filteredSavedGames)

    return filteredSavedGames
  }

  function updateGame(game) {
    deleteGame(game.player.name)
    saveGame(game)
    return game
  }

  return <SavedGamesContext.Provider value={{ saveGame, loadGame, deleteGame, selectedGame, savedGames }}>{children}</SavedGamesContext.Provider>
}
