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
  margin: 10px 0 20px 0;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    margin-bottom: 10px;
  }
`;

export const publishedDateClass = css`
  font-size: 14px;
  font-weight: 700;
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

  @media only screen and (max-width: ${theme.breakpoints.medium}) {
    width: 90%;
  }
`;

export const imageAndPlayerClass = css`
  display: flex;
  gap: 20px;

  img {
    margin: 0 auto;
    width: 30%;
    aspect-ratio: 1 / 1;
    align-self: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    flex-wrap: wrap;
    img {
      width: 75%;
      height: auto;
      order: 1;
    }
  }
`;

export const navigationClass = props => css`
  display: flex;
  justify-content: ${props.hasPrevious ? 'space-between' : 'flex-end'};
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

export const descriptionAndPlayerClass = props => css`
  display: flex;
  flex-direction: column;
  justify-content: ${props.hasDescription ? 'space-between' : 'flex-start'};
  width: calc(70% - 20px);
  gap: 20px;

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    width: 100%;
    margin: 0 auto;
    order: 2;
    gap: ${props.hasDescription ? '20px' : '10px'};;
  }
`;