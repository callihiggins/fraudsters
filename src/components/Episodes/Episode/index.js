import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image, imageUrl }) => {
  const imageToShow = () => {
    if (image) {
      return <Img fluid={image.childImageSharp.fluid} width="100%" />
    } else if (imageUrl) {
      return <Img className={styles.plaeceHolderImageClass} image={imageUrl}/>
    } else {
      return false;
    }
  }
  const imageHtml = imageToShow();

  return (
    <Link to={`./${slug}`}>
      <div className={styles.episodeContainerClass}>
        {imageHtml ? imageHtml : <StaticImage className={styles.plaeceHolderImageClass} src="../../../images/placeholder.jpg"/>}
        <div className={styles.infoClass}>
          <div className={styles.dateClass}>{publishedAt}</div>
          <div className={styles.titleClass}>{title}</div>
        </div>
      </div>
    </Link>

  )
}

export default Episode;