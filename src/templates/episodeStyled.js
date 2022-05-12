import { css } from '@emotion/css';
import { default as theme } from '../theme';

export const pageContainerClass = css`
  background-color: ${theme.colors.yellow};
  min-height: calc(100vh - ${theme.componentsHeight.footer});
`;

export const pageTitleClass = css`
  text-align: center;
  font-size: 48x;
  font-family: ${theme.fonts.upAway};
  margin: 10px 0;
`;

export const episodeContainerClass = css`
  padding: 20px;
  padding-top: calc(${theme.componentsHeight.nav} + 20px);
  display: flex;
  gap: 40px;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  font-size: 18px;


  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 90%;
  }
`;

export const descriptionClass = css`
  font-size 
`;