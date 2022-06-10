import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image }) => (
  <div css={styles.episodeContainerClass}>
    <Link to={`./${slug}`}>
      {image ? <Img fluid={image.childImageSharp.fluid} width="100%" /> : <StaticImage css={styles.plaeceHolderImageClass} src="../../../images/s2-coverart.jpg"/>}
      <div css={styles.dateClass}>{publishedAt}</div>
      <div css={styles.titleClass}>{title}</div>
    </Link>
  </div>
)

export default Episode;