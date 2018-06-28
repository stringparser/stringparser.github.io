import styled from 'styled-components';

type Props = {
  mixins?: string[];
};

const Section = styled<Props, 'section'>('section')`
  height: 90vh;
  padding: 2rem 4rem;
`;

export default Section;
