import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PageHelmet from '../components/PageHelmet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import * as styles from './episodeStyled';

library.add(fab, faEnvelope);

function EpisodePage({ pageContext }) {
  const { episode } = pageContext;
  
  return (
    <>
      <div className={styles.pageContainerClass}>
        <PageHelmet title={episode.title} keywords={episode.keywords} />
        <Nav />
        <div className={styles.episodeContainerClass}>
            <h1 className={styles.pageTitleClass}>{episode.title}</h1>
            <div className={styles.publishedDateClass}>{episode.publishedAt}</div>
            <iframe height="200px" width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}?dark=true&amp;show=true&amp;color=000000`}></iframe>
            <div className={styles.descriptionClass}>{episode.description}</div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default EpisodePage;