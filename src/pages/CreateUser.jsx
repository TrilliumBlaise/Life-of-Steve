import { useState } from 'react'
import { LinkButton } from '../components/LinkButton'
import { Button } from '../components/Button'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { useSavedGames } from '../contexts/SavedGamesContext'

export function CreateUser() {
  const navigate = useNavigate()
  const { savedGames } = useSavedGames()
  const [errorMessage, setErrorMessage] = useState('')

  function validateForm() {
    const name = document.getElementById('name').value
    if (name === '') {
      setErrorMessage('Name cannot be empty.')
      return
    }
    if (savedGames.find(game => game.name === name)) {
      setErrorMessage('Name has been used, please delete current file to use name again.')
      return
    }
    navigate('/game-screen', { state: { name } })
  }

  return (
    <div data-name id="create-user-screen" className="container">
      <canvas></canvas>
      <form className="name-input">
        <h1 id="text">Please enter your name: </h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <input id="name" type="text" autoFocus autoComplete="off" />
          {errorMessage != '' && <span className="error">{errorMessage}</span>}
        </div>
      </form>
      <div className="buttons">
        <Button callback={validateForm} id="start" message="S T A R T" />
        <LinkButton id="return" message="R E T U R N" path="/" />
      </div>
    </div>
  )
}
