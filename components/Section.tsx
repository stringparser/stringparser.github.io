
import styled from 'styled-components';

import { forMedia, align } from './mixins';
import { colors } from './theme';

import Background, { parseBackgroundAsString } from './Background';

const sectionTypes = {
  primary: `
    color: white;
  `,
  info: `
    color: white;
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

const Content = styled<Props, 'div'>('div')`

  ${({ variation }) =>
    forMedia('tablet', `
      ${variation === 'primary' && `
        margin: 0 auto;
        max-width: 420px;
      `}
    `)
  }
`;

const StyledSection = styled<Props, 'section'>('section')`
  position: relative;
  min-height: 90vh;
  ${align('v-center')}

  ${forMedia('phone', 'padding: 2rem;')}
  ${forMedia('tablet', 'padding: 3rem;')}

  ${({ variation }) => sectionTypes[variation || 'secondary']}
`;

const Section: React.SFC<Props> = ({
  background,
  children,
  ...props
}) => (
  <StyledSection {...props}>
    <Content {...props}>
      {children}
    </Content>
    <Background {...parseBackgroundAsString(background)} />
  </StyledSection>
);

export default Section;
