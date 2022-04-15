import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './styled';

const Episode = ({ title, description, slug }) => {
  return (
    <Link to={`./${slug}`}>
      <div className={styles.titleClass}>{title}</div>
      <div className={styles.descriptionClass}>{description}</div>
    </Link>
  )
}

export default Episode;