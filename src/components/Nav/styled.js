import { css } from '@emotion/css';
import { default as theme } from '../../theme';

const duration = '.5s';
const distance = '5px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const navContainer = {
  backgroundColor: '#000',
  height: '75px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '1000',
}

export const logoContainer = {
  a: {
    color: `${theme.colors.yellow}`,
    textDecoration: 'none',
    fontSize: '24px',
    fontFamily: `${theme.fonts.upAway}`
  }
}

export const linksContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  color: `${theme.colors.white}`,
  fontFamily: `${theme.fonts.avantGarde}, 'sans-serif'`,
  fontSize: '14px',
  a: {
    margin: '0 15px',
    color: `${theme.colors.white}`,
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    display: 'block',

    '&:after' : {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#000',
    },
    '&:before' : {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#000',
      opacity: '0',
      transform: `translateY(- ${distance})`,
      transition: `transform 0s ${easeOutBack}, opacity 0s`,
    },
    '&:after' : {
      opacity: '0',
      transform: `translateY($distance/2)`,
      transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
    },
    '&:hover' : {
      '&:before' : {
        opacity: '1',
        transform: 'translateY(0)',
        transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
      },
      '&:after' : {
        opacity: '1',
        transform: 'translateY(0)',
        transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`,
      }
    }
  }
}

export const socialMediaIconsClass = {
  width: '180px',
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '15px',
  a: {
    margin: '0 !important',
  }
}

export const hideMobile = {
  '@media only screen and (max-width: 1020px)': {
    display: 'none',
  }
}

export const hideDesktop = {
  display: 'none',
  '@media only screen and (max-width: 1020px)': {
    display: 'block',
  }
}
