import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainer = css`
  background-color: ${theme.colors.yellow};
`;

export const pageTitle = css`
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