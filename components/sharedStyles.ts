export const colors = {
  dim: 'rgba(0,0,0,0.7)',
  link: 'blue',
  primary: 'black',
  secondary: '#6d6d6d',
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

const mqForMedia = (media: Media) => (
  media === 'phone'
    ? `(max-width: ${breakpoints[media]})`
    : `(min-width: ${breakpoints[media]})`
);

export const forMedia = (media: Media, css: string) => `
  @media ${mqForMedia(media)} {
    ${css}
  }
`;

export const boxShadow = `
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
`;
