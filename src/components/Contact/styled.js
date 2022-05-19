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
  font-size: 72px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 80%;
    font-size: 48px;
  }
`;  

export const containerClass = css`
  background-color: ${theme.colors.yellow};
  width: 80%;
  margin: 0 auto;
`;

export const aboutContainerClass = css`
  display: flex;

  section {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    a {
      color: #000000;
    }

    &:first-child {
      border-right: 1px solid #000000;
    }

    button {
      padding: 7px 10px;
      background: #000000;
      border-radius: 3px;
      color: ${theme.colors.white};
      outline: 0;
      box-shadow: none;
      border: 1px solid #000000;
      font-size: 18px;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    flex-wrap: wrap;

    h2 {
      text-align: center;
    }

    section {
      flex-basis: 80%;
      margin: 0 auto;

      &:first-child {
        border-right: 0;
        border-bottom: 1px solid #000000;
        padding-bottom: 40px;
      }
      &:last-child {
        padding-top: 40px;
      }
    }
  }
`;

export const overlayClass = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backgroundColor: rgba(0,0,0, 0.5);
`;

export const contentClass = css`
  position: absolute;
  top: 115px;
  left: 40px;
  right: 40px;
  bottom: 140px;
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  WebkitOverflowScrolling: touch;
  borderRadius: 4px;
  outline: none;
  padding: 20px;
  width: 60%;
  margin: 0 auto;
`;

export const closeButton = css`
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background: ${theme.colors.white};
  cursor: pointer;
`;


export const modalContainerClass = css`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;

  @media only screen and (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }

  h2 {
    padding-bottom: 40px;
  }

  label {
    display: block;
    font-weight: 700;
    padding-bottom: 7px;
    white-space: pre-wrap;

    span {
      padding-top: 4px;
      font-weight: 400;
      font-size: 12px;
      color: rgba(15,15,15,0.8);
      display: block;
    }
  }

  input, textarea {
    margin-bottom: 25px;
    padding: 7px 14px;
    padding-left: 2px;
    border: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    border-radius: 30x;
    &:focus {
      outline: 0;
    }
  }

  textarea {
    height: 100px;
    border: 1px solid #000;
    border-radius: 3px;
    font-family: ${theme.fonts.avantGarde};
    padding-left: 5px;
    resize: none;
  }

  button {
    padding: 7px 10px;
    background: #000000;
    border-radius: 3px;
    color: ${theme.colors.white};
    outline: 0;
    box-shadow: none;
    border: 1px solid #000000;
    font-size: 18px;
    cursor: pointer;
    margin-top: 25px;
  }
`;
