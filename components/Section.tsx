
import styled from 'styled-components';
import { forMedia, align } from './mixins';

import Background, { parseBackgroundAsString } from './Background';

const sectionTypes = {
  primary: `
    color: white;
  `,
  secondary: `
    color: black;
  `,
};

type SectionType = keyof (typeof sectionTypes);

type Props = {
  id?: string;
  type?: SectionType;
  background?: string;
};

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Section: React.SFC<Props> = ({
  type = 'secondary',
  background,
  children,
  ...props
}) => (
  <section {...props}>
    <Content>
      {children}
    </Content>
    <style jsx={true}>
    {`
      padding: 2rem;
      position: relative;
      min-height: 30rem;

      ${align('center')}
      ${sectionTypes[type] ||  ''}

      ${forMedia('tablet', `
        padding: 5rem;
      `)}
    `}
    </style>
    <Background {...parseBackgroundAsString(background)} />
  </section>
);

export default Section;
