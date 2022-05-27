import * as React from 'react';
import { cx } from '@emotion/css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PageHelmet from '../components/PageHelmet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as styles from './episodeStyled';
import Img from 'gatsby-image';
import { StaticImage } from "gatsby-plugin-image"

library.add(fab, faEnvelope);

function EpisodePage({ pageContext }) {
  const { episode, nextEpisode, prevEpisode } = pageContext;
  const formattedTime = new Date(episode.duration * 1000).toISOString().slice(11, 19);

  const authorsHTML = episode.authors.map(author => 
    <li>{author}</li>
  )

  const imageToShow = () => {
    if (episode.image) {
      return <Img fluid={episode.image.childImageSharp.fluid} width="100%" />
    } else {
      return false;
    }
  }

  const imageHtml = imageToShow();
  return (
    <>
      <div className={styles.pageContainerClass}>
        <PageHelmet image={episode.imageUrl} description={episode.longDescription || episode.description} title={episode.title} keywords={[...episode.authors, ...episode.keywords]} />
        <Nav />
        <div className={styles.episodeContainerClass}>
            <h1 className={styles.pageTitleClass}>{episode.title}</h1>
            <div className={styles.imageAndPlayerClass}>
              <div className={styles.descriptionAndPlayerClass({ hasDescription : episode.longDescription || episode.description })} >
                <div className={styles.publishedDateClass}>{episode.publishedAt} | <FontAwesomeIcon icon={regular('clock')} /> {formattedTime}</div>
                <iframe height={ episode.longDescription || episode.description ? '122px' : '250px'} width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}?dark=true&amp;show=true&amp;color=000000`}></iframe>
                <div className={styles.descriptionClass} dangerouslySetInnerHTML={{ __html: episode.longDescription ? episode.longDescription : episode.description}}></div>
              </div>
              <div className={styles.imageAndAuthorsClass}>
                {imageHtml ? imageHtml : <StaticImage className={styles.plaeceHolderImageClass} src="../images/s2-coverart.jpg"/>}
                <div className={cx(styles.authorsClass, styles.hideMobile)}>
                  <strong>Show Contributors</strong>
                  <ul>
                    {authorsHTML}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.navigationClass({ hasPrevious : prevEpisode })}>
              {prevEpisode && (
                <div className={styles.episodeNavClass}>
                  <Link to={`/episodes/${prevEpisode.slug}`}>
                  <div className={styles.episodeNavInfoClass}>
                      <FontAwesomeIcon icon={solid('arrow-left')} />
                      <span className={styles.hideMobile}>{prevEpisode.title}</span>
                      <span className={styles.hideDesktop}>Prev Episode</span>
                    </div>
                  </Link>
                </div>
              )}
              {nextEpisode && (
                <div className={styles.episodeNavClass}>
                  <Link to={`/episodes/${nextEpisode.slug}`}>
                    <div className={cx(styles.episodeNavInfoClass, styles.alignRightClass)}>
                      <span className={styles.hideMobile}>{nextEpisode.title}</span>
                      <span className={styles.hideDesktop}>Next Episode</span>
                      <FontAwesomeIcon icon={solid('arrow-right')} />
                    </div>
                  </Link>
                </div>
              )}
            </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default EpisodePage;