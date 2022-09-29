import { Obstacle } from './Obstacle'
import { PlayerRow } from './PlayerRow'

export function BoardRow({ obstacle, hasPlayer = false }) {
  if (hasPlayer && obstacle != undefined) {
    return (
      <div className="board-row">
        <Obstacle type={obstacle} />
        <PlayerRow />
      </div>
    )
  }
  if (hasPlayer) {
    return (
      <div className="board-row">
        <PlayerRow />
      </div>
    )
  }
  if (obstacle != undefined)
    return (
      <div className="board-row">
        <Obstacle type={obstacle} />
      </div>
    )
  return <div className="board-row"></div>
}
