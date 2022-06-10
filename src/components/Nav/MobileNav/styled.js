import { css } from '@emotion/css';
import { default as theme } from '../../../theme';

export const mobileNavClass = {
  textTransform: 'uppercase',
  margin: '20px 0',

  a: {
    color: `${theme.colors.white}`,
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    margin: '20px 0',
  },

  '&.aciveClass': {
    a: {
      borderBottom: `2px solid ${theme.colors.yellow}`,
    }
  }
}

export const socialMediaIconsClass = {
  width: '100%',
  marginTop: '50px',
  display: 'flex !important',
  justifyContent: 'space-between',
}

export const iconClass = {
  color: `${theme.colors.white}`,
  fontSize: '18px',
  fontWeight: '700',
}

export const logoClass = {
  width: '100px',
  height: 'auto',
  marginLeft: '25px',
  marginTop: '25px',
}

export const navClass = {
  position: 'fixed',
  top: '0',
  zIndex: '300',
  height: '75px',
  background: '#000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
}