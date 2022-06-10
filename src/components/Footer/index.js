import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image"
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as styles from './styled';

const Footer = () => {
  return (
    <footer css={styles.footerClass}>
      <div css={styles.leftSideClass}>
        <StaticImage width={70} layout="fixed" src='../../images/zerocool.png' css={styles.logoClass} alt="Zero Cool"/>
        <StaticImage width={70} layout="fixed" src='../../images/lastPodcastNetwork.jpg' css={styles.logoClass} alt="Last Podcast Network"/>
        {/* <div css={styles.copyrightClass}>&copy; Fraudsters 2022</div> */}
      </div>
      <div css={styles.rightSideClass}>
        <span css={styles.followClass}>Follow us:</span>
        <div css={styles.socialMediaIconsClass}>
          <OutboundLink href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></OutboundLink>
          <OutboundLink href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></OutboundLink>
          <OutboundLink href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></OutboundLink>
          <OutboundLink href="https://www.youtube.com/channel/UCQwl8sDTVEAxhwJdYgm-yrg" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></OutboundLink>
          <OutboundLink href="https://discord.gg/WRZ8zgusPT" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'discord']} /></OutboundLink>
          <OutboundLink href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></OutboundLink>
        </div>
      </div>

    </footer>
  )
}

export default Footer;