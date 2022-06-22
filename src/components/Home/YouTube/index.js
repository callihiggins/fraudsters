import React from "react"
import * as styles from './styled';

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
     <div css={styles.captionClass}>
        {videoTitle}
     </div>
  </div>
)
export default Video