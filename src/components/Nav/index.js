import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileNav from './MobileNav';
import * as styles from './styled';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">Fraudsters</Link>
      </div>
      <div className={styles.hideMobile}>
        <div className={styles.linksContainer}>
          <Link activeClassName='activeClass' to="/episodes">Episodes</Link>
          <Link activeClassName='activeClass' to="/merch">Merch</Link>
          <Link activeClassName='activeClass' to="/about">About</Link>
          <Link activeClassName='activeClass' to="/contact">Contact</Link>
          <div className={styles.socialMediaIconsClass}>
            <a href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
            <a href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            <a href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
          </div>
        </div>
      </div>
      <div className={styles.hideDesktop}>
        <MobileNav />
      </div>
   </nav>
  )
}
export default Navbar