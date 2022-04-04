import * as React from "react"

function EpisodePage({ pageContext }) {
  const { episode } = pageContext;
  return (
    <div>
      {episode.id} <br />
      {episode.title}<br />
      {episode.description}<br />
      {episode.keywords}<br />
      <iframe height="200px" width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}`}></iframe>
    </div>
  )
}

export default EpisodePage;