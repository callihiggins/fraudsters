import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = css`
  background-color: ${theme.colors.yellow};
  padding-top: ${theme.componentsHeight.nav};
`;

export const pageTitleClass = css`
  text-align: center;
  font-size: 72px;
  font-family: ${theme.fonts.upAway};
  margin: 10px 0;
`;

export const episodesContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;