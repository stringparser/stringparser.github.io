export const colors = {
  white: 'snow',
  dark: 'rgba(0,0,0,0.9)',
  dim: 'rgba(0,0,0,0.5)',
  dimmer: 'rgba(0,0,0,0.7)',
  info: '#26262a',
  link: 'aliceblue',
  glass: 'rgba(0,0,0,0.15)',
  primary: 'black',
  inverted: 'snow',
  secondary: '#6d6d6d',
  'dim-inverted': 'rgba(255,255,255,0.8)',
};

export const zIndex = {
  background: 0,
  foreground: 100,
  navbar: 200,
  modal: 300,
  dialog: 400,
  alert: 500,
};

export const breakpoints = {
  phone: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
};

export type Media = keyof (typeof breakpoints);
