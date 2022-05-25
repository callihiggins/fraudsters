import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { slide as MobileMenu } from 'react-burger-menu'
import { Link } from 'gatsby';
import { cx } from '@emotion/css';
import logo from '../../../images/icon.png';
import * as styles from  './styled';
import hamburger from '../../../images/hamburger.svg';
import './menuStyle.scss';

const Nav = () => {
  const [open, setState] = useState(false);

  const closeMenu = () => {
    setState(false);
  };

	return (
    <div className={styles.navClass}>
      <MobileMenu isOpen={open} customBurgerIcon={ <img src={hamburger} /> } right width={ '50%' } >
        <nav className={styles.mobileNavClass}>
          <Link activeClassName='activeClass' to="/episodes" onClick={closeMenu}>Episodes</Link>
          <Link activeClassName='activeClass' to="/merch" onClick={closeMenu}>Merch</Link>
          <Link activeClassName='activeClass' to="/about" onClick={closeMenu}>About</Link>
          <Link activeClassName='activeClass' to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <div className={styles.socialMediaIconsClass}>
        <a href="https://open.spotify.com/show/7KI5zSFWSHoUEewwF40PtO?si=Z_A2oXjwQLi8NoEdfHdXhw" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
          <a href="https://twitter.com/fraudsterslpn" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://www.instagram.com/fraudsterslpn/" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="https://discord.gg/WRZ8zgusPT" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fab', 'discord']} /></a>
          <a href="mailto:fraudsterslpn@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconClass}><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
        </div>
      </MobileMenu>
    </div>
  )
}

export default Nav;