import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from 'gatsby-plugin-google-gtag'
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
          <OutboundLink href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></OutboundLink>
          <OutboundLink href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></OutboundLink>
          <OutboundLink href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></OutboundLink>
          <OutboundLink href="https://www.youtube.com/channel/UCQwl8sDTVEAxhwJdYgm-yrg" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></OutboundLink>
          <OutboundLink href="https://discord.gg/WRZ8zgusPT" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'discord']} /></OutboundLink>
          <OutboundLink href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></OutboundLink>
        </div>
      </div>

    </footer>
  )
}

export default Footer;