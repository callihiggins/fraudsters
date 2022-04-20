import { css } from '@emotion/css';
import { default as theme } from '../../../theme';

export const mobileNavClass = css`
  text-transform: uppercase;
  margin: 20px 0;

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 16px;
    display: block;
    margin: 20px 0;
  }

  &.aciveClass {
    a {
      border-bottom: 2px solid ${theme.colors.yellow};
    }
  }
`;

export const socialMediaIconsClass = css`
  width: 100%;
  margin-top: 50px;
  display: flex !important;
  justify-content: space-between;
`;

export const iconClass = css`
  color: ${theme.colors.white};
  font-size: 22px;
  font-weight: 700;
`;

export const logoClass = css`
  width: 100px;
  height: auto;
  margin-left: 25px;
  margin-top: 25px;
`;

export const navClass = css`
  position: fixed;
  top: 0;
  z-index: 300;
  height: 75px;;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;