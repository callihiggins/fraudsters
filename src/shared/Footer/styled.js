import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const footerClass = css`
  height: ${theme.componentsHeight.footer};
  background-color: #000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 15px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.avantGarde};
  font-size: 12px;
`;

export const logoClass = css`
  width: 75px;
  height: 70px;
`;

export const rightSideClass = css`
  display: flex;
  flex-wrap: wrap;
  width: 130px;
`;

export const leftSideClass = css`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;

export const socialMediaIconsClass = css`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

export const iconClass = css`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 700;
`;

export const followClass = css`
  margin-right: 20px;
  @media (max-width: ${theme.breakpoints.medium}px) {
    margin: 10px 20px 10px 0;;
  }
`;

export const copyrightClass = css`
  padding-top: 7px;
`;