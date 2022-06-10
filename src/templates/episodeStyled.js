import { css } from '@emotion/css';
import { default as theme } from '../theme';

export const pageContainerClass = css`
  background-color: ${theme.colors.yellow};
  min-height: calc(100vh - ${theme.componentsHeight.footer});
`;

export const pageTitleClass = css`
  font-size: 36px;
  font-family: ${theme.fonts.upAway};
  margin-top: 10px;

  @media only screen and (max-width: 800px) {
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

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const imageAndPlayerClass = css`
  display: flex;
  gap: 40px;

  img {
    width: 100%;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    align-self: center;
  }

  @media only screen and (max-width: 1020px) {
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
  margin-top: 10px;
  border-top: 1px solid rgba(15,15,15,0.1);
`;

export const episodeNavClass = css`
  width: 300px;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: #000000;
  }

  @media only screen and (max-width: 800px) {
    width: 115px;
  }

`;

export const episodeNavInfoClass = css`
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(0,0,0,1);

  &:hover {
    transition: color .5s ease;
    color: rgba(15,15,15, .7)
  }

`;

export const hideMobile = css`
  @media only screen and (max-width: 1020px) {
    display: none;
  }
`;

export const hideDesktop = css`
  display: none;
  @media only screen and (max-width: 1020px) {
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
  width: calc(70% - 20px);
  gap: 20px;

  @media only screen and (max-width: 1020px) {
    width: 100%;
    margin: 0 auto;
    order: 2;
    gap: ${props.hasDescription ? '20px' : '10px'};;
  }
`;

export const descriptionClass = css`
  font-size: 16px;
  line-height: 22px;
  p {
    margin-top: 7px;

    a {
      color: #000000;
    }
  }

  a {
    color: #000000;
  }
`;

export const imageAndAuthorsClass = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 20px;

  @media only screen and (max-width: 1020px) {
    width: 100%;
  }
`;

export const authorsClass = css`
  border-top: 1px solid rgba(15,15,15,0.1);
  font-size: 14px;
  padding-top: 10px;
  ul {
    list-style: none;
  }
`;

export const plaeceHolderImageClass = css`
  border: 1px solid #000000;
`;