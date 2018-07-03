import styled from 'styled-components';

import { navbarHeight } from './Navbar';
import { composeMixins } from './mixins';

type Props = {
  mixins?: string[];
};

const Section = styled<Props, 'section'>('section')`
  ${({ mixins }) => composeMixins(mixins)}

  padding-top: ${navbarHeight};
`;

export default Section;
