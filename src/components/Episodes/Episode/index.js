import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image }) => (
  <div css={styles.episodeContainerClass}>
    <Link to={`./${slug}`}>
      {image ? <Img fluid={image.childImageSharp.fluid} width="100%" alt={title} /> : <StaticImage css={styles.plaeceHolderImageClass} src="../../../images/s3-coverart.jpg" alt="podcast cover image" />}
      <div css={styles.dateClass}>{publishedAt}</div>
      <div css={styles.titleClass}>{title}</div>
    </Link>
  </div>
)

export default Episode;