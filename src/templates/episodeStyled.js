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
  margin-top: 10px;
`;

export const publishedDateClass = css`
  text-align: center;
`;

export const episodeContainerClass = css`
  padding: 20px;
  padding-top: calc(${theme.componentsHeight.nav} + 20px);
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  font-size: 18px;


  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 90%;
  }
`;

export const imageAndPlayerClass = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    margin: 0 auto;
    width: 38%;
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    img {
      width: 75%;
    }
  }
`;

export const navigationClass = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
`;

export const episodeNavClass = css`
  width: 300px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: #000000;
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 115px;
  }

`;

export const episodeNavInfoClass = css`
  display: flex;
  gap: 8px;
  align-items: center;

`;

export const hideMobile = css`
  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    display: none;
  }
`;

export const hideDesktop = css`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    display: block;
  }
`;

export const alignRightClass = css`
  text-align: right;
  justify-content: flex-end;
`;