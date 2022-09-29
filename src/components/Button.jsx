export function Button({ id, message, fontSize = '2rem', callback }) {
  return (
    <button onClick={callback} id={id} style={{ fontSize: fontSize }}>
      {message}
    </button>
  )
}
