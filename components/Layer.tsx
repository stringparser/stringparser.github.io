import styled from 'styled-components';
import { composeMixins } from './mixins';

type Props = {
  mixins?: string[];
};

const Layer = styled<Props, 'div'>('div')`
  ${({ mixins }) => composeMixins(mixins)}
`;

export default Layer;
