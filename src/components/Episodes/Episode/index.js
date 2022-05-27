import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image }) => (
  <div className={styles.episodeContainerClass}>
    <Link to={`./${slug}`}>
      {image ? <Img fluid={image.childImageSharp.fluid} width="100%" /> : <StaticImage className={styles.plaeceHolderImageClass} src="../../../images/s2-coverart.jpg"/>}
      <div className={styles.dateClass}>{publishedAt}</div>
      <div className={styles.titleClass}>{title}</div>
    </Link>
  </div>
)

export default Episode;