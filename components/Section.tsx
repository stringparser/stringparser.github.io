import styled from 'styled-components';

import { composeMixins } from './mixins';

type Props = {
  mixins?: string[];
};

const Section = styled<Props, 'section'>('section')`
  ${({ mixins }) => composeMixins(mixins)}
  padding: 2rem 4rem;
`;

export default Section;
