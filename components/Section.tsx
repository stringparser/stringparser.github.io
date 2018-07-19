
import styled from 'styled-components';

import { colors } from './theme';
import { forMedia, align, composeMixins, boxShadow } from './mixins';

import ChevronDown from './icon/ChevronDown';
import Background, { parseBackgroundAsString } from './Background';

const sectionTypes = {
  primary: `
    color: white;
    min-height: 90vh;
    text-align: center;
  `,
  info: `
    color: white;
    background-color: ${colors.info};
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

const Content = styled<Props, 'div'>('div')`
  ${({ mixins }) => composeMixins(mixins)}
`;

const StyledSection = styled<Props, 'section'>('section')`
  position: relative;
  min-height: 80vh;
  ${align('v-center')}

  ${forMedia('phone', 'padding: 2rem;')}
  ${forMedia('tablet', 'padding: 5rem 3rem;')}

  ${({ variation }) => sectionTypes[variation || 'secondary']}

  ${boxShadow()}
`;

const SectionIcon = styled.div`
  left: 0;
  right: 0;
  bottom: 1rem;
  position: absolute;
  text-align: center;
`;

const NextSectionLink: React.SFC<{ href?: string; }> = ({ href }) => (
  <SectionIcon>
    <a href={href} style={{ color: 'currentColor' }}>
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
    <Content {...props}>
      {children}
    </Content>
    <Background
      position={backgroundPosition}
      {...parseBackgroundAsString(background)}
    />
    {nextSectionLink && <NextSectionLink href={nextSectionLink} />}
  </StyledSection>
);

export default Section;
