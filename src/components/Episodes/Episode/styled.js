import { css } from '@emotion/css';
import { default as theme } from '../../../theme';

export const titleClass = css`
  font-size: 14px; 
  color: #000;
  cursor: pointer;
  background: #000;
  color: ${theme.colors.white};
  padding: 0px 15px 15px 15px;
  font-weight: 500;
`;

export const dateClass = css`
  font-size: 12px; 
  color: #000;
  cursor: pointer;
  background: #000;
  color: ${theme.colors.white};
  padding: 15px 15px 10px 15px;
  font-weight: 700;
  text-align: center;
`;

export const episodeContainerClass = css`
  width: 28%;
  margin: 20px;
  cursor: pointer;
  background: #000000;

  img {
    width: 100%;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 80%;
  }
`;