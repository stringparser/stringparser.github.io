import styled from 'styled-components';

import { lineHeight } from './theme';

type BRProps = {
  height?: string;
};

export const BR = styled<BRProps, 'br'>('br')`
  height: ${({ height }) => height || lineHeight};
  content: '';
  display: block;
`;

export const HR = styled.hr``;
