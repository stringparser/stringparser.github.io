
import styled from 'styled-components';

import { colors, zIndex, breakpoints } from '../theme';
import { forMedia, align, composeMixins, boxShadow } from '../mixins';

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
    background-color: white;
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

const _Section = styled<SectionProps, 'section'>('section')`
  ${boxShadow()}
  ${align('v-center')}
  ${forMedia('phone', 'padding: 2rem;')}
  ${forMedia('tablet', 'padding: 3rem;')}
  ${({ variation }) => sectionTypes[variation || 'secondary']}

  ${({ mixins }) => composeMixins(mixins)}

  z-index: ${zIndex.section};
  position: relative;
`;

const Section: React.SFC<SectionProps> = ({
  background,
  nextSectionLink,
  backgroundPosition,
  children,
  ...props
}) => (
  <_Section {...props}>
    <Background
      position={backgroundPosition}
      {...parseBackgroundAsString(background)}
    />

    {children}

    {props.id && <SectionLink {...props} />}
  </_Section>
);

export default Section;
