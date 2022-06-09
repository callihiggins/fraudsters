import React from "react"

const Video = ({ videoId, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video