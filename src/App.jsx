import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateUser } from './pages/CreateUser'
import { GameScreen } from './pages/GameScreen'
import { LoadGame } from './pages/LoadGame'
import { SavedGamesProvider } from './contexts/SavedGamesContext'

const GAME_NAME = 'Life of Steve'

function App() {
  document.querySelector('title').innerText = GAME_NAME

  return (
    <SavedGamesProvider name={GAME_NAME}>
      <Routes>
        <Route path="/" element={<Home name={GAME_NAME} />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/game-screen" element={<GameScreen name={GAME_NAME} />} />
        <Route path="/load-game" element={<LoadGame />} />
      </Routes>
    </SavedGamesProvider>
  )
}

export default App
