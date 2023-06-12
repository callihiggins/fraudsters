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
  alignItems: 'center'
}

export const nameClass = {
  fontSize: `72px`,
  fontWeight: '700',
  fontFamily: `${theme.fonts.dunbar}`
}

export const nameAndDetailsClass = {
  display: 'flex',
  flexDirection: 'column', 
  gap: '20px',
}

export const photoClass = {
  width: '80%',
}

export const descriptionClass = {
  fontSize: '24px'
}