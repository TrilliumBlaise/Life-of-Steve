import { LinkButton } from '../components/LinkButton'

export function Home({ name }) {
  return (
    <div data-name className="container" id="home-screen">
      <canvas></canvas>
      <div className="title">{name}</div>
      <div className="buttons">
        <LinkButton id="new" message="NEW GAME" fontSize="3rem" path="/create-user" />
        <LinkButton id="load" message="CONTINUE" fontSize="3rem" path="/load-game" />
      </div>
    </div>
  )
}
