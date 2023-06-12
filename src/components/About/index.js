import * as React from 'react';
import { brands, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image"
import PageHelmet from '../PageHelmet';
import Footer from '../Footer';
import Nav from '../Nav';
import * as styles from './styled';

export const About = () => 
  <>
    <PageHelmet />
    <Nav />
    <div css={styles.pageContainerClass}>
      <h1 css={styles.pageTitleClass}>Meet your friendly, neighborhood Fraudbusters</h1>
      <div css={styles.containerClass}>
        <div css={styles.personClass}>
          <StaticImage css={styles.photoClass} src='../../images/seena.png' alt="Seena Ghaznavi" />
          <div css={styles.bioClass}>
              <div css={styles.quoteClass}>
                “I’m Seena.”
              </div>
              <div css={styles.nameClass}>— Seena, Cohost</div>
          </div>
          <div css={styles.socialMediaIconsClass}>
            <a href="https://twitter.com/seenanow" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('twitter')} /></a>
            <a href="https://www.instagram.com/seenanow" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('instagram')} /></a>
            <a href="https://www.seena.me/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={solid('laptop')} /></a>
          </div>
        </div>
        <div css={styles.personClass}>
          <StaticImage css={styles.photoClass} src='../../images/justin.png' alt="Justin Williams" />
          <div css={styles.bioClass}>
              <div css={styles.quoteClass}>
                “I’m Justin.”
              </div>
              <div css={styles.nameClass}>— Justin, Cohost</div>
          </div>
          <div css={styles.socialMediaIconsClass}>
            <a href="https://www.facebook.com/ComedianJustinWilliams" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('facebook')} /></a>
            <a href="https://www.instagram.com/justin_williams_comedy/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('instagram')} /></a>
            <a href="https://justinwilliamscomedy.com/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={solid('laptop')} /></a>
            <a href="https://www.youtube.com/user/JustinCWilliams" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('youtube')} /></a>
            <a href="https://www.amazon.com/gp/product/B075ZL7R1X/ref=dm_ws_sp_ps_dp" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={solid('headphones')} /></a>
          </div>
        </div>
        <div css={styles.personClass}>
          <StaticImage css={styles.photoClass} src='../../images/ariel.png' alt="Justin Williams" />
          <div css={styles.bioClass}>
              <div css={styles.quoteClass}>
                “I’m Ariel.”
              </div>
              <div css={styles.nameClass}>— Ariel, Cohost</div>
          </div>
          <div css={styles.socialMediaIconsClass}>
            <a href="https://www.instagram.com/arielleaty/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('instagram')} /></a>
            <a href="https://twitter.com/arielleaty" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={brands('twitter')} /></a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

export default About;