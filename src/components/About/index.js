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
              <div css={styles.nameClass}>
              Seena Ghaznavi, JD, is a producer, comedian, and lawyer. He has been featured on Comedy Central, SiriusXM, and is the owner of Zerocool a full-service production company in New York and Los Angeles.
              </div>
              {/* <div css={styles.nameClass}>— Seena, Cohost</div> */}
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
              <div css={styles.nameClass}>
                Justin Williams, Phd, is a comedian and history professor. He is also the producer of The Brick City Comedy Revue, one of the longest running stand-up shows in New Jersey. If you send him an email, he will come to your house.
              </div>
              {/* <div css={styles.nameClass}>— Justin, Cohost</div> */}
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
              <div css={styles.nameClass}>
                Ariel Leaty is a comedian, actress, and model based in New Jersey. She has been featured on Vulture.com and hosts her own stand up showcase, Culture Vultures, highlighting stand up acts from underrepresented communities.
              </div>
              {/* <div css={styles.nameClass}>— Ariel, Cohost</div> */}
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