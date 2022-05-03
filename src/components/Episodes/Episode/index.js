import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import placeholder from '../../../images/placeholder.jpg'
import * as styles from './styled';

const Episode = ({ title, slug, image }) => {
  return (
    <div className={styles.episodeContainerClass}>
      <Link to={`./${slug}`}>
        {image ? <Img fixed={image} /> : <img src={placeholder}/>}
        <div className={styles.titleClass}>{title}</div>
      </Link>
    </div>

  )
}

export default Episode;