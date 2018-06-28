import styled from 'styled-components';

type BRProps = {
  height?: string;
};

export const BR = styled<BRProps, 'br'>('br')`
  height: ${({ height }) => height || '2rem'};
  content: '';
  display: block;
`;

export const HR = styled.hr``;
