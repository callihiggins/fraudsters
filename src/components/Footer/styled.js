import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const footerClass = {
  height: `${theme.componentsHeight.footer}`,
  backgroundColor: '#000',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '25px 15px',
  color: `${theme.colors.white}`,
  fontFamily: `${theme.fonts.avantGarde}`,
  fontSize: '12px',
}

export const logoClass = {
  width: '75px',
}

export const rightSideClass = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '200px',
}

export const leftSideClass = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '180px',
  alignItems: 'center',
}

export const socialMediaIconsClass = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '180px',
}

export const iconClass = {
  color: `${theme.colors.white}`,
  fontSize: '18px',
  fontWeight: '700',
}

export const followClass = {
  marginRight: '20px',
  '@media (max-width: ${theme.breakpoints.medium}px)' : {
    margin: '10px 20px 10px 0',
  }
}

export const copyrightClass = {
  paddingTop: '7px',
}