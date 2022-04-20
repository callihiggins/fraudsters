import { css } from '@emotion/css';
import { default as theme } from '../../theme';

const duration = '.5s';
const distance = '5px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const navContainer = css`
  background-color: #000;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
`;

export const logoContainer = css`
  a {
    color: ${theme.colors.yellow};
    text-decoration: none;
    font-size: 24px;
    font-family: ${theme.fonts.upAway}
  }
`;

export const linksContainer = css`
  display: flex;
  justify-content: space-around;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.avantGarde}, 'sans-serif';
  font-size: 14px;
  a {
    margin: 0 15px;
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;
    position: relative;
    display: block;

    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0; right: 0;
      height: 2px;
      background-color: ${theme.colors.white};
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
    &:hover, 
    &.activeClass {
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

export const socialMediaIconsClass = css`
   width: 120px;
   display: flex;
   justify-content: space-between;
   padding-left: 15px;
    a {
      margin: 0 !important;
    }
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
