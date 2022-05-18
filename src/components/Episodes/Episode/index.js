import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import placeholder from '../../../images/placeholder.jpg'
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image }) => {
  return (
    <div className={styles.episodeContainerClass}>
      <Link to={`./${slug}`}>
        {image ? <Img fluid={image.childImageSharp.fluid} width="100%" /> : <img src={placeholder}/>}
        <div className={styles.dateClass}>{publishedAt}</div>
        <div className={styles.titleClass}>{title}</div>
      </Link>
    </div>

  )
}

export default Episode;