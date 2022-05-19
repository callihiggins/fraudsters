import { css } from '@emotion/css';
import { default as theme } from '../../../theme';

export const titleClass = css`
  font-size: 24px; 
  color: #000000;
  cursor: pointer;
  padding: 0px 15px;
  justify-self: center;
  font-weight: 500;

  a:hover & {
    color: rgba(15,15,15,.7);
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    font-size: 18px; 
  }
`;

export const dateClass = css`
  font-size: 12px; 
  cursor: pointer;
  color: #000000;
  padding: 0 15px 10px 15px;
  font-weight: 700;

  a:hover & {
    color: rgba(15,15,15,.7);
  }

`;

export const episodeContainerClass = css`
  margin: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(15,15,15,.8);
  cursor: pointer;
  display: flex;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    margin: 5px 0;
    padding-bottom: 10px;
  }

  img, .gatsby-image-wrapper {
    width: 120px;
    min-width: 120px;
    cursor: pointer;
    align-self: center;

    @media only screen and (max-width: ${theme.breakpoints.small}) {
      width: 80px;
      min-width: 80px;
    }
  }

  a {
    display: flex;
    flex-direction: column;
  }
  
`;

export const infoClass = css`
  display: flex;
  flex-direction: column;
`;