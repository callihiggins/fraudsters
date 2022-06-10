import { css } from '@emotion/css';
import { default as theme } from '../../../theme';

export const titleClass = {
  fontSize: '14px', 
  color: '#000',
  cursor: 'pointer',
  background: '#000',
  color: `${theme.colors.white}`,
  padding: '0px 15px 15px 15px',
  fontWeight: '500',
}

export const dateClass = {
  fontSize: '12px', 
  color: '#000',
  cursor: 'pointer',
  background: '#000',
  color: `${theme.colors.white}`,
  padding: '15px 15px 10px 15px',
  fontWeight: '700',
  textAlign: 'center',
}

export const episodeContainerClass = {
  width: '28%',
  margin: '20px',
  cursor: 'pointer',
  background: '#000000',

  img: {
    width: '100%',
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
  },

  '@media only screen and (max-width: 800px)': {
    width: '80%',
  }
}