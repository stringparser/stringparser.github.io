
import styled from 'styled-components';

import { colors, zIndex } from './theme';
import { forMedia, align, composeMixins, boxShadow } from './mixins';

import ChevronDown from './icon/ChevronDown';
import Background, { parseBackgroundAsString } from './Background';

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
    min-height: 50vh;
    text-align: center;
    background-color: rgba(0,0,0,0.8);
  `,
  secondary: `
    color: black;
    background-color: rgba(0,0,0,0.05);
  `,
};

type SectionType = keyof (typeof sectionTypes);

type Props = {
  id?: string;
  mixins?: string[];
  variation?: SectionType;
  background?: string;
  nextSectionLink?: string;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
};

const StyledSection = styled<Props, 'section'>('section')`
  ${boxShadow()}
  ${align('v-center')}
  ${forMedia('phone', 'padding: 2rem;')}
  ${forMedia('tablet', 'padding: 3rem;')}
  ${({ variation }) => sectionTypes[variation || 'secondary']}

  ${({ mixins }) => composeMixins(mixins)}

  position: relative;
`;

const SectionIcon = styled.div`
  left: 0;
  right: 0;
  bottom: -13px;
  z-index: ${zIndex.foreground};
  position: absolute;
  text-align: center;

  svg {
    padding: 5px;
    border-radius: 50%;
    background-color: #000;
    box-shadow: 0 1px 1px 1px white;
  }
`;

const NextSectionLink: React.SFC<{ href?: string; }> = ({ href }) => (
  <SectionIcon>
    <a href={href} style={{ color: 'white' }}>
      <ChevronDown />
    </a>
  </SectionIcon>
);

const Section: React.SFC<Props> = ({
  background,
  nextSectionLink,
  backgroundPosition,
  children,
  ...props
}) => (
  <StyledSection {...props}>
    <Background
      position={backgroundPosition}
      {...parseBackgroundAsString(background)}
    />

    {children}

    {nextSectionLink && <NextSectionLink href={nextSectionLink} />}
  </StyledSection>
);

export default Section;
