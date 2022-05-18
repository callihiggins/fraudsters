import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = css`
  background-color: ${theme.colors.yellow};
  padding-top: ${theme.componentsHeight.nav};
`;

export const pageTitleClass = css`
  text-align: center;
  font-family: ${theme.fonts.upAway};
  margin: 10px 0;
  font-size: 72px;
  padding: 20px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width:  80%;
    font-size: 48px;
    margin: 0 auto;
  }
`;

export const episodesContainerClass = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`;