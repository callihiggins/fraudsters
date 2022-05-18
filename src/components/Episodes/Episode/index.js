import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import placeholder from '../../../images/placeholder.jpg'
import * as styles from './styled';

const Episode = ({ title, publishedAt, slug, image }) => {

  // if (title === 'Episode 31: Sir Gregor MacGregor, his Captain Crunch Army, and a Lotta Lucky Charms') debugger;
  return (
    <Link to={`./${slug}`}>
      <div className={styles.episodeContainerClass}>
        {image ? <Img fluid={image.childImageSharp.fluid} width="420px" /> : <img src={placeholder}/>}
        <div className={styles.infoClass}>
          <div className={styles.dateClass}>{publishedAt}</div>
          <div className={styles.titleClass}>{title}</div>
        </div>
      </div>
    </Link>


  )
}

export default Episode;