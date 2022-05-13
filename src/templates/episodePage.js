import * as React from 'react';
import { cx } from '@emotion/css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PageHelmet from '../components/PageHelmet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as styles from './episodeStyled';
import Img from 'gatsby-image';
import placeholder from '../images/placeholder.jpg';

library.add(fab, faEnvelope, faArrowLeft, faArrowRight);

function EpisodePage({ pageContext }) {
  const { episode, nextEpisode, prevEpisode } = pageContext;
  return (
    <>
      <div className={styles.pageContainerClass}>
        <PageHelmet title={episode.title} keywords={episode.keywords} />
        <Nav />
        <div className={styles.episodeContainerClass}>
            <h1 className={styles.pageTitleClass}>{episode.title}</h1>
            <div className={styles.imageAndPlayerClass}>
              <div className={styles.descriptionAndPlayerClass({ hasDescription : episode.description })} >
                <div className={styles.publishedDateClass}>{episode.publishedAt}</div>
                <div className={styles.descriptionClass}>{episode.description}</div>
                <iframe height="122px" width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}?dark=true&amp;show=true&amp;color=000000`}></iframe>
              </div>
              {episode.image ? <Img fixed={episode.image} /> : <img src={placeholder}/>}

            </div>
            <div className={styles.navigationClass}>
              {prevEpisode && (
                <div className={styles.episodeNavClass}>
                  <Link to={`/episodes/${prevEpisode.slug}`}>
                  <div className={styles.episodeNavInfoClass}>
                      <FontAwesomeIcon icon={['fas', 'arrow-left']} />
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
                      <FontAwesomeIcon icon={['fas', 'arrow-right']} />
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