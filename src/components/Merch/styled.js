import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  paddingTop: `${theme.componentsHeight.nav}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const pageTitleClass = {
  margin: '20px auto',
  fontFamily: `${theme.fonts.dunbar}`,
  color: '#000000',
  textAlign: 'center',
  padding: '10px 0',
  fontSize: '72px',

  '@media only screen and (max-width: 800px)': {
    width: '80%',
    fontSize: '48px',
  }
}  

export const containerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  width: '80%',
  margin: '0 auto',
}