import * as React from 'react';
import { cx } from '@emotion/css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PageHelmet from '../PageHelmet';
import Nav from '../Nav';
import Footer from '../Footer';
import * as styles from './styled';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"


const PostPage = ({ body, title }) => {
  const convertToSlug = text => 
    text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

  const slug = convertToSlug(title)
  return (
    <>
      <div css={styles.postContainerClass}>
        <Link to={`../../blog/${slug}`}>
          <div css={styles.titleClass}>{title}</div>
        </Link>
        <div css={styles.bodyClass}>
          {body}
        </div>
      </div>
    </>
  )
};

export default PostPage