import { default as theme } from '../../../theme';

export const igImageClass = {
  width: '100%',
  display: 'block',
  margin: '15px 0',
  textAlign: 'left',
  img: {
    width: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  a: {
    textDecoration: 'none',
    color: '#000000'
  }
}

export const captionClass = {
  padding: '10px',
  background: `${theme.colors.white}`,
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',
  border: `1px solid ${theme.colors.white}`,
  fontSize: '12px',
  opacity: '.85',
  lineHeight: '18px'
}

export const timestampClass = {
  marginBottom: '10px',
  fontWeight: '700',
  cursor: 'pointer'
}