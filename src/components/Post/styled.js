import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  paddingTop: `${theme.componentsHeight.nav}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const postContainerClass = {
  margin: `40px auto`,
  width: '80%',
  maxWidth: '1200px',
  borderBottom: '1px solid black',
  paddingBottom: '40px',
  lineHeight: '24px'
}

export const titleClass = {
  color: 'black',
  fontSize: '22px',
  marginBottom: '20px',
  textDecoration: 'underline black',
  fontWeight: '500',
  fontFamily: `${theme.fonts.dunbar}`
}

export const bodyClass = {
  p: {
    margin: '10px 0',
  }
}