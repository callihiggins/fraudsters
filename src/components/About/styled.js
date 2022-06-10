import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  paddingTop: `${theme.componentsHeight.nav}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const pageTitleClass = {
  margin: '20px auto',
  fontFamily: `${theme.fonts.upAway}`,
  color: '#000000',
  textAlign: 'center',
  padding: '10px 0',
  fontSize: '50px',

  "@media only screen and (max-width: 800px)": {
    width: '80%',
    fontSize: '36px',
  }
}  

export const containerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  width: '70%',
  margin: '0 auto',
  display: 'flex',
  gap: '40px',
  justifyContent: 'space-between',
  paddingTop: '20px',
  "@media only screen and (max-width: 800px)" : {
    flexWrap: 'wrap',
  }
}

export const personClass = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: 'calc(40% - 20px)',
  paddingBottom: '20px',
  "@media only screen and (max-width: 800px)" : {
    width: '100%',
  }
}

export const quoteClass = {
  fontFamily: `${theme.fonts.upAway}`,
  fontSize: '30px',
  textAlign: 'center',
}

export const nameClass = {
  float: 'right',
  fontSize: '16px',
}

export const socialMediaIconsClass = {
  display: 'flex',
  margin: '0 auto',
}

export const iconClass = {
  color: '#000000',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 7px', 
}