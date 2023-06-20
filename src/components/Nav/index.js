import * as React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileNav from './MobileNav';
import * as styles from './styled';

const Navbar = ({ fadedNav }) => {
  return (
    <nav className={styles.navContainer({fadedNav: fadedNav})}>
      <div css={styles.logoContainer}>
        <Link to="/">Fraudsters</Link>
      </div>
      <div css={styles.hideMobile}>
        <div css={styles.linksContainer}>
          {/* <Link activeClassName='activeClass' to="/thefraudsters">The Fraudsters</Link> */}
          <Link activeClassName='activeClass' to="/episodes">Episodes</Link>
          <Link activeClassName='activeClass' to="/merch">Merch</Link>
          <Link activeClassName='activeClass' to="/about">About</Link>
          <Link activeClassName='activeClass' to="/contact">Contact</Link>
          <div css={styles.socialMediaIconsClass}>
            <OutboundLink href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></OutboundLink>
            <OutboundLink href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></OutboundLink>
            <OutboundLink href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></OutboundLink>
            <OutboundLink href="https://www.youtube.com/channel/UCQwl8sDTVEAxhwJdYgm-yrg" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'youtube']} /></OutboundLink>
            <OutboundLink href="https://discord.gg/WRZ8zgusPT" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fab', 'discord']} /></OutboundLink>
            <OutboundLink href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" css={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></OutboundLink>
          </div>
        </div>
      </div>
      <div css={styles.hideDesktop}>
        <MobileNav />
      </div>
   </nav>
  )
}
export default Navbar