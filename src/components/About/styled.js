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
  font-size: 50px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 80%;
    font-size: 36px;
  }
`;  

export const containerClass = css`
  background-color: ${theme.colors.yellow};
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    flex-wrap: wrap;
  }
`;

export const personClass = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc(30% - 20px);
  padding-bottom: 20px;
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }
`;

export const quoteClass = css`
  font-family: ${theme.fonts.upAway};
  font-size: 30px;
  text-align: center;
`;

export const nameClass = css`
  float: right;
  font-size: 16px;
`;

export const socialMediaIconsClass = css`
  display: flex;
  margin: 0 auto;
`;

export const iconClass = css`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  margin: 0 7px; 
`;