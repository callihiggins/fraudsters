import React from "react"
import Img from 'gatsby-image';
import * as styles from './styled';

const IGphoto = ({ image, ...props }) => {
  return (
    <div css={styles.igImageClass}>
      <Img fluid={image} width="100%"/>
    </div>
)}
export default IGphoto