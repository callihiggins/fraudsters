import React from "react"
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as styles from './styled';

const IGphoto = ({ image, caption, permalink, timestamp, ...props }) => {
  return (
    <div css={styles.igImageClass}>
      <OutboundLink href={permalink} target="_blank">
        <Img fluid={image} width="100%"/>
        <div css={styles.captionClass}>
          <div css={styles.timestampClass}>{timestamp}</div>
          {caption}
        </div>
      </OutboundLink>
    </div>
)}
export default IGphoto