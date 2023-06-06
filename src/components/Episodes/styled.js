import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  paddingTop: `${theme.componentsHeight.nav}`,
}

export const pageTitleClass = {
  textAlign: 'center',
  fontFamily: `${theme.fonts.dunbar}`,
  margin: '10px 0',
  fontSize: '72px',
  padding: '20px',

  '@media only screen and (max-width: 800px)': {
    width: '80%',
    fontSize: '48px',
  }
}

export const episodesContainerClass = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  width: '80%',
  margin: '0 auto',
}