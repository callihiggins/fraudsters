import { css } from '@emotion/css';
import { default as theme } from '../../theme';


export const mainContainerClass = css`
  background-color: ${theme.colors.yellow};
  height: calc(100vh - ${theme.componentsHeight.footer});
  width: 100vw;
  position: relative;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    height: auto;
    min-height: calc(100vh - ${theme.componentsHeight.footer});
  }
`;

export const titleClass = css`
  font-family: ${theme.fonts.upAway}, sans-serif;
  font-size: 110px;
  letter-spacing: 1.5px;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  padding: 20px 0 0 20px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    font-size: 50px;
    text-align: center;
    padding: 20px 0 0 0;
  }
`;

export const drawingClass = css`
  position: absolute;
  bottom: 0;
  right: 40px;
  display: flex;
  justify-content: flex-end;

  img {
    width: auto;
    height: 75vh;
    max-width: 700px;
    max-height: 666px;
  }

  @media only screen and (max-width: ${theme.breakpoints.medium}) {
    img {
      height: auto;
      width: 75%;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    img {
      width: 60%;
    }
  }


  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: none;
  }
`;

export const subTitleClass = css`
  font-family: ${theme.fonts.avantGarde}, sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-left: 20px;
  width: 50%;
  font-size: 20px;

  @media only screen and (max-width: ${theme.breakpoints.medium}) {
    width: 80%;
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    text-align: center;
    font-size: 18px;
    padding: 0 20px;
    width: 100%;
  }
`;

export const playerClass = css`
  padding: 60px 0 0 20px;

  iframe {
    width: 40%;
    height: calc(100vh - ${theme.componentsHeight.footer} - 400px);
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    text-align: center;
    padding: 0;
    iframe {
      width: 100%;
      height: 480px;
      padding: 20px;;
    }
  }
`;

export const mobileHeaderClass = css`
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: flex;
    flex-direction: column;
  }
`;

export const mobileImageClass = css`
  display: none;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: block;
    text-align: center;
    padding: 20px 0;
    img {
      width: 80%;
    }
  }
`;