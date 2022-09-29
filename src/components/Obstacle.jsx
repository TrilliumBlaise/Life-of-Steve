import { Block } from './Block.jsx'

export function Obstacle({ type }) {
  return (
    <div className="game-obstacle-row">
      <Block obstacle={type[0]} />
      <Block obstacle={type[1]} />
      <Block obstacle={type[2]} />
      <Block obstacle={type[3]} />
      <Block obstacle={type[4]} />
    </div>
  )
}
