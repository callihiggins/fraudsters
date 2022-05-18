import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styled';

const Footer = () => {
  return (
    <footer className={styles.footerClass}>
      <div className={styles.leftSideClass}>
        <StaticImage width={70} layout="fixed" src='../../images/zerocool.png' className={styles.logoClass} alt="Zero Cool"/>
        <StaticImage width={70} layout="fixed" src='../../images/lastPodcastNetwork.jpg' className={styles.logoClass} alt="Last Podcast Network"/>
        {/* <div className={styles.copyrightClass}>&copy; Fraudsters 2022</div> */}
      </div>
      <div className={styles.rightSideClass}>
        <span className={styles.followClass}>Follow us:</span>
        <div className={styles.socialMediaIconsClass}>
          <a href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
          <a href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;