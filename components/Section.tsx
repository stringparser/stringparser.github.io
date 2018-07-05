
import styled from 'styled-components';

import { forMedia, align } from './mixins';
import { breakpoints, colors } from './theme';

import { navbarHeight } from './Navbar';
import Background, { parseBackgroundAsString } from './Background';

const sectionTypes = {
  primary: `
    color: white;
  `,
  info: `
    background-color: ${colors.info};
  `,
  secondary: `
    color: black;
  `,
};

type SectionType = keyof (typeof sectionTypes);

type Props = {
  id?: string;
  variation?: SectionType;
  background?: string;
};

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const StyledSection = styled<Props, 'section'>('section')`
  position: relative;
  min-height: 30rem;
  ${align('center')}

  padding: ${navbarHeight * 2}rem 2rem;
  ${forMedia('tablet', `padding: 5rem;`)}

  ${({ variation }) => sectionTypes[variation || 'secondary']}
`;

const Section: React.SFC<Props> = ({
  background,
  children,
  ...props
}) => (
  <StyledSection {...props}>
    <Content>
      {children}
    </Content>
    <Background {...parseBackgroundAsString(background)} />
  </StyledSection>
);

export default Section;
