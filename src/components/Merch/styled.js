import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = css`
  background-color: ${theme.colors.yellow};
  padding-top: ${theme.componentsHeight.nav};
  min-height: calc(100vh - ${theme.componentsHeight.footer});
`;

export const pageTitleClass = css`
  margin: 20px auto;
  font-family: ${theme.fonts.upAway};
  color: #000000;
  text-align: center;
  padding: 10px 0;
  font-size: 72px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 80%;
    font-size: 48px;
  }
`;  

export const containerClass = css`
  background-color: ${theme.colors.yellow};
  width: 80%;
  margin: 0 auto;
`;