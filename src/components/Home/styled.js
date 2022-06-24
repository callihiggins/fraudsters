import { css } from '@emotion/css';
import { default as theme } from '../../theme';

const duration = '.5s';
const distance = '5px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const mainContainerClass = {
  backgroundColor: `${theme.colors.yellow}`,
  height: `calc(100vh - ${theme.componentsHeight.footer} + 1px) !important`,
  width: '100vw',
  position: 'relative',

  "@media only screen and (max-width: 800px)": {
    height: 'auto  !important',
    width: '100%',
    minHeight: `calc(100vh - ${theme.componentsHeight.footer})`,
  }
}

export const titleClass = {
  fontFamily: `${theme.fonts.upAway}, sans-serif`,
  fontSize: '110px',
  letterSpacing: '1.5px',
  WebkitFontSmoothing: 'antialiased',
  fontWeight: '500',
  padding: '5px 0 0 20px',
  zIndex: '1000',
  marginTop: '-40px',


  "@media only screen and (max-width: 800px)" : {
    fontSize: '30px',
    color: `${theme.colors.yellow}`,
    padding: '20px 0 0 20px',
    width: '200px',
    position: 'fixed',
    marginTop: 0
  }
}

export const drawingClass = {
  position: 'absolute',
  bottom: '0',
  right: '40px',
  width: '79vh',
  height: '75vh',
  maxWidth: '700px',
  maxHeight: '666px',


  "@media only screen and (max-width: 1200px)" : {
    height: 'auto',
    width: '55%',
    right: '20px',
    bottom: '0',
  },

  "@media only screen and (max-width: 1020px)" : {
    width: '50%',
  },


  "@media only screen and (max-width: 800px)" : {
    display: 'none  !important',
  }
}

export const subTitleClass = {
  fontFamily: `${theme.fonts.avantGarde}, sans-serif`,
  fontWeight: '500',
  fontStyle: 'normal',
  paddingLeft: '20px',
  width: '50%',
  fontSize: '20px',

  "@media only screen and (max-width: 1020px)" : {
    width: '80%',
  },

  "@media only screen and (max-width: 800px)" : {
    textAlign: 'center',
    fontSize: '18px',
    padding: '0 20px',
    width: '100%',
  }
}

export const playerClass = {
  padding: '40px 0 0 20px',

  iframe : {
    width: '50%',
    height: `calc(100vh - ${theme.componentsHeight.footer} - 350px)`,
  },

  "@media only screen and (max-width: 1300px)" : {
    iframe : {
      width: '40%',
    }
  },

  "@media only screen and (max-width: 800px)" : {
    textAlign: 'center',
    padding: '0',
    iframe : {
      width: '100%',
      height: '480px',
      padding: '20px',
    }
  }
}

export const headerClass = {
  "@media only screen and (max-width: 800px)" : {
    display: 'flex',
    flexDirection: 'column',
  }
}

export const mobileImageClass = {
  display: 'none',

  "@media only screen and (max-width: 800px)" : {
    display: 'block',
    textAlign: 'center',
    padding: '90px 0 20px 0',
    width: '60%',
    margin: '0 auto',
  }
}

export const navClass = {
  width: '40%',
  position: 'absolute',
  top: '20px',
  right: '20px',
  display: 'flex',
  fontFamily: `${theme.fonts.avantGarde}, sans-serif`,
  fontWeight: '500',
  justifyContent: 'space-around',

  "@media only screen and (max-width: 1020px)" : {
    width: '30%',
  },

  "@media only screen and (max-width: 800px)" : {
    display: 'none',
  },

  a: {
    cursor: 'pointer',
    position: 'relative',
    display: 'block',
    color: '#000',
    textDecoration: 'none',
    
    '&:after' : {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#000',
    },
    '&:before' : {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#000',
      opacity: '0',
      transform: `translateY(- ${distance})`,
      transition: `transform 0s ${easeOutBack}, opacity 0s`,
    },
    '&:after' : {
      opacity: '0',
      transform: `translateY($distance/2)`,
      transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
    },
    '&:hover' : {
      '&:before' : {
        opacity: '1',
        transform: 'translateY(0)',
        transition: `transform ${duration} ${easeOutBack}, opacity ${duration}`,
      },
      '&:after' : {
        opacity: '1',
        transform: 'translateY(0)',
        transition: `transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration}`,
      }
    }
  }
}

export const hideDesktop = {
  display: 'none',
  "@media only screen and (max-width: 800px)" : {
    display: 'block',
  }
}

export const hideMobile = {
  display: 'block',
  "@media only screen and (max-width: 800px)" : {
    display: 'none',
  }
}

export const footerClass = {
  position: 'fixed',
  bottom: '0',
  width: '100%',

  '@media only screen and (max-width: 800px)': {
    position: 'relative'
  }
}

export const socialSetionClass = {
  backgroundColor: `${theme.colors.yellow}`,
  width: '80%',
  margin: '0 auto',

  "@media only screen and (max-width: 800px)" : {
    height: 'auto !important'
  }
}

export const socialSectionHeaderClass = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '40px 20px 20px 20px',
  h2: {
    fontFamily: `${theme.fonts.upAway}, sans-serif`,
    fontSize: '48px',
    textAlign: 'center',
    whiteSpace: 'pre'
  },
  "@media only screen and (max-width: 800px)" : {
    padding: '40px 0 20px 0',
    h2: {
      fontSize: '32px',
    }
  }

}


export const lineClass = {
  height: '1px',
  borderTop: '1px solid black',
  background: 'black',
  width: '100%',
}

export const socialContainerClass = {
  padding: '20px',
  "@media only screen and (max-width: 800px)" : {
    padding: '20px 0'
  }
}

export const socialThumbnailContainerClass = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 300px)',
  justifyContent: 'space-around',
  gridGap: '20px',
}

export const igThumbnailContainerClass = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 300px)',
  justifyContent: 'space-around',
  gridGap: '15px',
  alignItems: 'flex-start'
}

export const socialHeaderClass = {
  paddingBottom: '20px',
  img: {
    borderRadius: '50%',
    width: '60px',
  },
  a: {
    color: '#000000',
    textDecoration:'none',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '350px'
  },
  "@media only screen and (max-width: 800px)" : {
    img: {
      width: '40px'
    },
    a: {
      maxWidth: '100%'
    }
  }
}

export const socialUserClass = {
  marginLeft: '5px',
  fontWeight: '700',
  fontSize: '18px',
  position: 'relative'

}

export const showMoreButtonClass = {
  background: '#000000',
  padding: '10px 15px',
  border: '1px solid #000000',
  borderRadius: '3px',
  color: `${theme.colors.white}`,
  margin: '0 auto',
  fontWeight: '700',
  fontSize: '16px',
  width: '120px',
  cursor: 'pointer'
}

export const igContainerClass = {
  paddingBottom: '140px',
  textAlign: 'center',
}

