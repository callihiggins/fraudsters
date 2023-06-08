import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as styles from './styled';

const Fraudster = ({ name, photo, slug }) => {
  debugger;
  return (
  <div css={styles.episodeContainerClass}>
      <Link to={`./${slug}`}>
        <Img fluid={photo.fluid} width="100%" alt={name} /> 
        <div css={styles.titleClass}>{name}</div>
      </Link>
    </div>
  )
};

export default Fraudster;