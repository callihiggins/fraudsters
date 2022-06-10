import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const pageTitleClass = {
  fontSize: '36px',
  fontFamily: `${theme.fonts.upAway}`,
  marginTop: '10px',

  '@media only screen and (max-width:800px)': {
    marginBottom: '10px',
  }
}

export const publishedDateClass = {
  fontSize: '14px',
  fontWeight: '700',
}

export const episodeContainerClass = {
  padding: '20px',
  paddingTop: `calc(${theme.componentsHeight.nav} + 20px)`,
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  width: '70%',
  margin: '0 auto',
  fontSize: '18px',

  '@media only screen and (max-width: 1200px)': {
    width: '90%',
  }
}

export const imageAndPlayerClass = {
  display: 'flex',
  gap: '40px',

  img: {
    width: '100%',
    margin: '0 auto',
    aspectRatio: '1 / 1',
    alignSelf: 'center',
  },

  '@media only screen and (max-width: 1020px)': {
    flexWrap: 'wrap',
    img: {
      width: '75%',
      height: 'auto',
      order: '1',
    }
  }
}

export const navigationClass = props => css`
  display: flex;
  justify-content: ${props.hasPrevious ? 'space-between' : 'flex-end'};
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
  border-top: 1px solid rgba(15,15,15,0.1);
`;

export const episodeNavClass = {
  width: '300px',
  marginTop: '30px',

  a: {
    textDecoration: 'none',
    color: '#000000',
  },

  '@media only screen and (max-width: 800px)': {
    width: '115px',
  }

}

export const episodeNavInfoClass = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  color: 'rgba(0,0,0,1)',

  '&:hover': {
    transition: 'color .5s ease',
    color: 'rgba(15,15,15, .7)'
  }

}

export const hideMobile = {
  '@media only screen and (max-width: 1020px)': {
    display: 'none',
  }
}

export const hideDesktop = {
  display: 'none',
  '@media only screen and (max-width: 1020px)': {
    display: 'block',
  }
}

export const alignRightClass = {
  textAlign: 'right',
  justifyContent: 'flex-end',
}

export const descriptionAndPlayerClass = props => css`
  display: flex;
  flex-direction: column;
  width: calc(70% - 20px);
  gap: 20px;

  @media only screen and (max-width: 1020px) {
    width: 100%;
    margin: 0 auto;
    order: 2;
    gap: ${props.hasDescription ? '20px' : '10px'};
  }
`;

export const descriptionClass = {
  fontSize: '16px',
  lineHeight: '22px',
  p: {
    marginTop: '7px',

    a: {
      color: '#000000',
    }
  },

  a: {
    color: '#000000',
  }
}

export const imageAndAuthorsClass = {
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  gap: '20px',

  '@media only screen and (max-width: 1020px)': {
    width: '100%',
  }
}

export const authorsClass = {
  borderTop: '1px solid rgba(15,15,15,0.1)',
  fontSize: '14px',
  paddingTop: '10px',
  ul: {
    listStyle: 'none',
  }
}

export const plaeceHolderImageClass = {
  border: '1px solid #000000',
}