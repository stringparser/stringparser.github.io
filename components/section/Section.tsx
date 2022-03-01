
import styled from 'styled-components';

import { colors, zIndex } from '../theme';
import { forMedia, align, composeMixins } from '../mixins';

import Background, { parseBackgroundAsString } from '../Background';
import SectionLink from './SectionLink';

const sectionTypes = {
  info: `
    color: white;
    background-color: ${colors.info};
  `,
  light: `
    color: black;
    background-color: #f8f9fa;
  `,
  primary: `
    color: white;
    text-align: center;
    min-height: 300px;
    background-color: rgba(0,0,0,0.8);
  `,
  secondary: `
    color: black;
    background-color: rgba(0,0,0,0.05);
  `,
};

export type SectionType = keyof (typeof sectionTypes);

export type SectionProps = {
  id?: string;
  mixins?: string[];
  variation?: SectionType;
  background?: string;
  nextSectionLink?: string;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
};

const Section = styled('section')`
  ${align('v-center')}
  ${forMedia('phone', 'padding: 2rem;')}
  ${forMedia('tablet', 'padding: 2rem;')}
  ${({ variation }: SectionProps) => sectionTypes[variation || 'secondary']}

  ${({ mixins }) => composeMixins(mixins)}

  z-index: ${zIndex.section};
  position: relative;
`;

const _Section: React.FC<SectionProps> = ({
  background,
  nextSectionLink,
  backgroundPosition,
  children,
  ...props
}) => (
  <Section {...props}>
    <Background
      position={backgroundPosition}
      {...parseBackgroundAsString(background)}
    />

    {children}

    {props.id && <SectionLink {...props} />}
  </Section>
);

export default _Section;
