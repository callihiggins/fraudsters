import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const headerClass = {
  borderBottom: '5px solid black',
  margin:`${theme.componentsHeight.nav} auto 40px auto`,
  width: '80%',
  maxWidth: '1200px',
  display: 'flex',
  gap: '40px',
  padding: '40px 0',
  alignItems: 'center',
  '@media only screen and (max-width: 800px)': {
    width: '100%',
    padding: '40px',
    flexDirection: 'column'
  }
}

export const nameClass = {
  fontSize: `72px`,
  fontWeight: '700',
  fontFamily: `${theme.fonts.dunbar}`,
  '@media only screen and (max-width: 800px)': {
    fontSize: `42px`,
  }
}

export const nameAndDetailsClass = {
  display: 'flex',
  flexDirection: 'column', 
  gap: '20px',
}

export const photoClass = {
  width: '80%',
  '@media only screen and (max-width: 800px)': {
    width: '100%',
  }
}

export const descriptionClass = {
  fontSize: '24px',
  '@media only screen and (max-width: 800px)': {
    fontSize: `18px`,
  }
  
}