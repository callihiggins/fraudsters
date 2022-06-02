import { css } from '@emotion/css';
import { default as theme } from '../../theme';

const duration = '.5s';
const distance = '5px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const mainContainerClass = css`
  background-color: ${theme.colors.yellow};
  height: calc(100vh - ${theme.componentsHeight.footer});
  width: 100vw;
  position: relative;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    height: auto;
    width: 100%;
    min-height: calc(100vh - ${theme.componentsHeight.footer});
  }
`;

export const titleClass = css`
  font-family: ${theme.fonts.upAway}, sans-serif;
  font-size: 110px;
  letter-spacing: 1.5px;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  padding: 5px 0 0 20px;
  z-index: 1000;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    font-size: 30px;
    color: ${theme.colors.yellow};
    padding: 20px 0 0 20px;
    width: 200px;
  }
`;

export const drawingClass = css`
  position: absolute;
  bottom: 2px;
  right: 40px;
  width: 79vh;
  height: 75vh;
  max-width: 700px;
  max-height: 666px;


  @media only screen and (max-width: ${theme.breakpoints.medium}) {
    height: auto;
    width: 55%;
    right: 20px;
    bottom: 0;
  }

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    width: 50%;
  }


  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: none  !important;
  }
`;

export const subTitleClass = css`
  font-family: ${theme.fonts.avantGarde}, sans-serif;
  font-weight: 500;
  font-style: normal;
  padding-left: 20px;
  width: 50%;
  font-size: 20px;

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
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
  padding: 40px 0 0 20px;

  iframe {
    width: 50%;
    height: calc(100vh - ${theme.componentsHeight.footer} - 350px);
  }

  @media only screen and (max-width: ${theme.breakpoints.mediumLarge}) {
    iframe {
      width: 40%;
    }
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

export const headerClass = css`
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
    padding: 40px 0 20px 0;
    img {
      width: 60%;
    }
  }
`;

export const navClass = css`
  width: 40%;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  font-family: ${theme.fonts.avantGarde}, sans-serif;
  font-weight: 500;
  justify-content: space-around;

  @media only screen and (max-width: ${theme.breakpoints.mediumSmall}) {
    width: 30%;
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: none;
  }

  a {
    cursor: pointer;
    position: relative;
    display: block;
    color: #000;
    text-decoration: none;
    
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0; right: 0;
      height: 2px;
      background-color: #000;
    }
    &:before {
      opacity: 0;
      transform: translateY(- ${distance});
      transition: transform 0s ${easeOutBack}, opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform ${duration} ${easeOutBack}, opacity ${duration};
    }
    &:hover {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform ${duration} ${easeOutBack}, opacity ${duration};
      }
      &:after {
        transition: transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration};
      }
    }
  }
`;

export const hideDesktop = css`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.small}) {
    display: block;
  }
`;