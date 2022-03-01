import styled from 'styled-components';
import { composeMixins } from './mixins';

type Props = {
  mixins?: string[];
};

const Layer = styled('div')`
  position: relative;
  ${({ mixins }: Props) => composeMixins(mixins)}
`;

export default Layer;
