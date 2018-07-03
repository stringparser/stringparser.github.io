import { colors, forMedia } from './sharedStyles';

export const composeMixins = (mixins?: string[]) => (
  mixins && mixins.join('\n')
);

const colorVariations = {
  dim: colors.dim,
  primary: 'black',
  inverted: 'snow',
  secondary: colors.secondary,
  'dim-inverted': 'rgba(255,255,255,0.8)',
};

type ColorVariation = keyof (typeof colorVariations);

export const color = (v: ColorVariation) => `
  color: ${colorVariations[v]};
`;

export const bgColor = (v: ColorVariation) => `
  background-color: ${colorVariations[v]};
`;

export const bgImage = (v: string) => `
  background: url('${v}') center left no-repeat;
  background-size: cover;
`;

const alignment = {
  center: `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `,
  'v-center': `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export type Aligns = keyof (typeof alignment);

export const align = (v: Aligns) => alignment[v];

export const height = (v: string) => `height: ${v};`;

export const list = () => `
  & > * {
    margin: 1rem 0;
  }

  ${forMedia('tablet', `
    & > * {
      margin: 0 2rem;
    }
  `)}
`;

export const gutter = () => `
  padding: 2rem 4rem;
`;

export const columns = () => `
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    flex: 1;
  }

  ${forMedia('tablet', `
    flex-direction: row;
  `)}
`;
