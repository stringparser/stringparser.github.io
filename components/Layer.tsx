import styled from 'styled-components';
import { composeMixins } from './mixins';

type Props = {
  mixins?: string[];
};

const Layer = styled<Props, 'div'>('div')`
  position: relative;
  ${({ mixins }) => composeMixins(mixins)}
`;

export default Layer;
