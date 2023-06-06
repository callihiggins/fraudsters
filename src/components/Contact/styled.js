import { css } from '@emotion/css';
import { default as theme } from '../../theme';

export const pageContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  paddingTop: `${theme.componentsHeight.nav}`,
  minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
}

export const pageTitleClass = {
  margin: '20px auto',
  fontFamily: `${theme.fonts.dunbar}`,
  color: `#000000`,
  textAlign: 'center',
  padding: '10px 0',
  fontSize: '72px',

  "@media only screen and (max-width: 800px)" : {
    width: `80%`,
    fontSize: `48px`,
  }
}  

export const containerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  width: '80%',
  margin: '0 auto',
}

export const aboutContainerClass = {
  display: 'flex',

  section: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',

    a: {
      color: '#000000',
    },

    '&:first-child': {
      borderRight: '1px solid #000000',
    },

    button: {
      padding: '7px 10px',
      background: '#000000',
      borderRadius: '3px',
      color: `${theme.colors.white}`,
      outline: '0',
      boxShadow: 'none',
      border: '1px solid #000000',
      fontSize: '18px',
      cursor: 'pointer',
    }
  },

  "@media only screen and (max-width: 800px)": {
    flexWrap: 'wrap',

    h2: {
      textAlign: 'center',
    },

    section: {
      flexBasis: '80%',
      margin: '0 auto',

      '&:first-child': {
        borderRight: '0',
        borderBottom: '1px solid #000000',
        paddingBottom: '40px',
      },
      '&:last-child': {
        paddingTop: '40px',
      }
    }
  }
}

export const overlayClass = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0, 0.5)',
}

export const contentClass = {
  position: 'absolute',
  top: '115px',
  left: '40px',
  right: '40px',
  bottom: '140px',
  border: '1px solid #ccc',
  background: '#fff',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '4px',
  outline: 'none',
  padding: '20px',
  width: '60%',
  margin: '0 auto',
}

export const closeButton = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  border: '0',
  background: `${theme.colors.white}`,
  cursor: 'pointer',
}


export const modalContainerClass = {
  width: '80%',
  margin: '0 auto',
  paddingTop: '20px',

  "@media only screen and (max-width: 800px)": {
    width: '100%',
  },

  h2: {
    paddingBottom: '40px',
  },

  label: {
    display: 'block',
    fontWeight: '700',
    paddingBottom: '7px',
    whiteSpace: 'pre-wrap',

    span: {
      paddingTop: '4px',
      fontWeight: '400',
      fontSize: '12px',
      color: 'rgba(15,15,15,0.8)',
      display: 'block',
    }
  },

  input: {
    marginBottom: '25px',
    padding: '7px 14px',
    paddingLeft: '2px',
    border: '0',
    borderBottom: '1px solid #000',
    width: '100%',
    borderRadius: '30x',
    '&:focus': {
      outline: '0',
    }
  },

  textarea: {
    height: '100px',
    border: '1px solid #000',
    borderRadius: '3px',
    fontFamily: `${theme.fonts.avantGarde}`,
    paddingLeft: '5px',
    resize: 'none',
    marginBottom: '25px',
    padding: '7px 14px',
    paddingLeft: '2px',
    borderBottom: '1px solid #000',
    width: '100%',
    borderRadius: '30x',
    '&:focus': {
      outline: '0',
    }
  },

  button: {
    padding: '7px 10px',
    background: '#000000',
    borderRadius: '3px',
    color: `${theme.colors.white}`,
    outline: '0',
    boxShadow: 'none',
    border: '1px solid #000000',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '25px',
  }
}
