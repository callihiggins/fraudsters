import React from "react"
import Img from 'gatsby-image';

const IGphoto = ({ image, ...props }) => (
  <Img fixed={image} />
)
export default IGphoto