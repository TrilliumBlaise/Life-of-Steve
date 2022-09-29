import { useNavigate } from 'react-router-dom'
import { useGame } from '../contexts/GameContext'
import { messages } from '../data/Messages'
import { Sentence } from './Sentence'

export function Message({ message, setFake }) {
  if (message === undefined) return <span></span>
  const navigate = useNavigate()
  const { setMessage, startNextLevel } = useGame()
  const m = messages[message]
  const textArray = m.text.match(/[^\.!\?]+[\.!\?]+/g) || [m.text]
  function handleButtonClick(e) {
    const id = e.target.id
    if (id === 'restart') {
      window.location.reload()
    }
    if (id === 'main-menu') {
      navigate('/')
    }
    if (id === 'ok') {
      setMessage()
    }
    if (id === 'next') {
      setMessage()
      startNextLevel()
    }
    setFake(prev => !prev)
  }

  return (
    <div className="messages">
      {textArray.map((sentence, i) => (
        <Sentence key={`sentence-${i}`} text={sentence} />
      ))}
      {m.buttons.map((button, i) => {
        const id = button.search(' ') ? button.split(' ').join('-') : button
        return (
          <button onClick={handleButtonClick} id={id} key={`message-button-${i}`}>
            {button.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
