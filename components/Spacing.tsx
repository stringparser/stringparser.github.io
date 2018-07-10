import styled from 'styled-components';

type BRProps = {
  height?: number;
};

export const BR = styled<BRProps, 'br'>('br')`
  height: ${({ height }) => `${height || 0.25}rem`};
  content: '';
  display: block;
`;

export const HR = styled.hr``;
