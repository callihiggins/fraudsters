import * as React from "react"
import { Helmet } from 'react-helmet'

function EpisodePage({ pageContext }) {
  const { episode } = pageContext;
  return (
    <div>
      <Helmet title={episode.title}>
        <meta name="keywords" content={episode.keywords}></meta>
        <meta name="description" content={episode.description}></meta>
      </Helmet>
      {episode.title}<br />
      {episode.description}<br />
      {episode.keywords}<br />
      <iframe height="200px" width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}`}></iframe>
    </div>
  )
}

export default EpisodePage;