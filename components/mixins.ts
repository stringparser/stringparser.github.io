import { colors } from './sharedStyles';

export const composeMixins = (mixins?: string[]) => (
  mixins && mixins.join('\n')
);

const colorVariations = {
  dim: `
    color: ${colors.dim};
  `,
  primary: `
    color: black;
  `,
  secondary: `
    color: ${colors.secondary};
  `,

  inverted: `
    color: snow;
  `,
  'dim-inverted': `
    color: rgba(255,255,255,0.8);
  `,
};

type ColorVariation = keyof (typeof colorVariations);

export const color = (v: ColorVariation) => colorVariations[v];

export const bgImage = (v: string) => `
  background: url('${v}') center center no-repeat;
  background-size: cover;
`;

const alignment = {
  'v-center': `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export type Aligns = keyof (typeof alignment);

export const align = (v: Aligns) => alignment[v];
