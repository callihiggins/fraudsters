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

library.add(fab, faEnvelope);

function EpisodePage({ pageContext }) {
  const { episode, nextEpisode, prevEpisode } = pageContext;
  const formattedTime = new Date(episode.duration * 1000).toISOString().slice(11, 19);

  const authorsHTML = episode.authors.map(author => 
    <li>{author}</li>
  )
  
  return (
    <>
      <div css={styles.pageContainerClass}>
        <PageHelmet image={episode.imageUrl} description={episode.longDescription || episode.description} title={episode.title} keywords={episode.authors} />
        <Nav />
        <div css={styles.episodeContainerClass}>
            <h1 css={styles.pageTitleClass}>{episode.title}</h1>
            <div css={styles.imageAndPlayerClass}>
              <div className={styles.descriptionAndPlayerClass({ hasDescription : episode.longDescription || episode.description })} >
                <div css={styles.publishedDateClass}>{episode.publishedAt} | <FontAwesomeIcon icon={regular('clock')} /> {formattedTime}</div>
                <iframe height={ episode.longDescription || episode.description ? '122px' : '250px'} width="100%" frameBorder="no" scrolling="no" title={episode.title} seamless src={`https://player.simplecast.com/${episode.simplecastId}?dark=true&amp;show=true&amp;color=000000`}></iframe>
                <div css={styles.descriptionClass} dangerouslySetInnerHTML={{ __html: episode.longDescription ? episode.longDescription : episode.description}}></div>
              </div>
              <div css={styles.imageAndAuthorsClass}>
                {episode.image ? <Img fluid={episode.image.childImageSharp.fluid} width="100%" alt="episode image"/> : <StaticImage css={styles.plaeceHolderImageClass} src="../../images/s3-coverart.jpg" alt="episode image"/>}
                <div css={[styles.authorsClass, styles.hideMobile]}>
                  <strong>Show Contributors</strong>
                  <ul>
                    {authorsHTML}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.navigationClass({ hasPrevious : prevEpisode })}>
              {prevEpisode && (
                <div css={styles.episodeNavClass}>
                  <Link to={`/episodes/${prevEpisode.slug}`}>
                  <div css={styles.episodeNavInfoClass}>
                      <FontAwesomeIcon icon={solid('arrow-left')} />
                      <span css={styles.hideMobile}>{prevEpisode.title}</span>
                      <span css={styles.hideDesktop}>Prev Episode</span>
                    </div>
                  </Link>
                </div>
              )}
              {nextEpisode && (
                <div css={styles.episodeNavClass}>
                  <Link to={`/episodes/${nextEpisode.slug}`}>
                    <div css={[styles.episodeNavInfoClass, styles.alignRightClass]}>
                      <span css={styles.hideMobile}>{nextEpisode.title}</span>
                      <span css={styles.hideDesktop}>Next Episode</span>
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