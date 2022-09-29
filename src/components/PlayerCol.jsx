import { Player } from './Player'

export function PlayerCol({ hasPlayer }) {
  if (hasPlayer)
    return (
      <div className="player-col">
        <Player />
      </div>
    )
  return <div className="player-col"></div>
}
