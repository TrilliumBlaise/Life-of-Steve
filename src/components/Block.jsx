export function Block({ obstacle }) {
  if (obstacle) return <div className="block-obstacle"></div>
  return <div className="block-tile"></div>
}
