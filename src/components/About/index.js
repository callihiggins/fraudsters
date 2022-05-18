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
    <div className={styles.pageContainerClass}>
      <h1 className={styles.pageTitleClass}>Meet your friendly, neighborhood Fraudbusters</h1>
      <div className={styles.containerClass}>
        <div className={styles.personClass}>
          <StaticImage src='../../images/seena.jpeg' alt="Seena Ghaznavi" />
          <div className={styles.bioClass}>
              <div className={styles.quoteClass}>
                “I’m Seena.”
              </div>
              <div className={styles.nameClass}>— Seena, Cohost</div>
          </div>
          <div className={styles.socialMediaIconsClass}>
            <a href="https://twitter.com/seenanow" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={brands('twitter')} /></a>
            <a href="https://www.instagram.com/seenanow" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={brands('instagram')} /></a>
            <a href="https://www.seena.me/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={solid('laptop')} /></a>
          </div>
        </div>
        <div className={styles.personClass}>
          <StaticImage src='../../images/justin.png' alt="Justin Williams" />
          <div className={styles.bioClass}>
              <div className={styles.quoteClass}>
                “I’m Justin.”
              </div>
              <div className={styles.nameClass}>— Justin, Cohost</div>
          </div>
          <div className={styles.socialMediaIconsClass}>
            <a href="https://www.facebook.com/ComedianJustinWilliams" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={brands('facebook')} /></a>
            <a href="https://www.instagram.com/justin_williams_comedy/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={brands('instagram')} /></a>
            <a href="https://justinwilliamscomedy.com/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={solid('laptop')} /></a>
            <a href="https://www.youtube.com/user/JustinCWilliams" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={brands('youtube')} /></a>
            <a href="https://www.amazon.com/gp/product/B075ZL7R1X/ref=dm_ws_sp_ps_dp" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={solid('headphones')} /></a>
          </div>
        </div>
        <div className={styles.personClass}>
          <StaticImage src='../../images/hazel.jpeg' alt="Hazel Leezah" />
          <div className={styles.bioClass}>
          <div className={styles.quoteClass}>
                “I’m Hazel.”
              </div>
              <div className={styles.nameClass}>— Hazel, Producer</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>

export default About;