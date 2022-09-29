import { useNavigate } from 'react-router-dom'

export function LinkButton({ id, message, fontSize = '2rem', path, state }) {
  const navigate = useNavigate()

  function changePage(path) {
    navigate(path, { state: state })
  }
  return (
    <button onClick={() => changePage(path)} id={id} style={{ fontSize: fontSize }}>
      {message}
    </button>
  )
}
