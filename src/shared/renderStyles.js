import { css } from '@emotion/css';
import { default as theme } from '../theme';

export const embedClass = {
  width: '80%',
  margin: '20px auto',
  height: '100%',
  '@media only screen and (max-width: 800px)': {
    width: '100%',
  }

}

export const embedContainerClass = {
  textAlign: 'center'
}

export const youTubeClass = {
  width: '560px',
  height: '315px',
  '@media only screen and (max-width: 800px)': {
    width: '100%',
  }
}

// export const embedPhotoClass = {
//   margin: '20px auto',
//   width: '80%',
//   textAlign: 'center',
//   img : {
//     width: '40%',
//     margin: '0 auto',   
//   },
// }

