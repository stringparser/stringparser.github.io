import styled from 'styled-components';
import { forMedia } from './sharedStyles';

const shared = `
  margin: 0;
  font-weight: normal;
`;

export const H1 = styled.h1`
  ${shared}
  font-size: 2rem;

  ${forMedia('tablet', 'font-size: 3rem;')}
`;

export const H2 = styled.h2`
  ${shared}
  font-size: 1rem;

  ${forMedia('tablet', 'font-size: 2rem;')}
`;

export const H3 = styled.h3`
  ${shared}
  font-size: 1rem;

  ${forMedia('tablet', 'font-size: 1.75rem;')}
`;

export const H4 = styled.h4`
  ${shared}
  font-size: 1rem;

  ${forMedia('tablet', 'font-size: 1.5rem;')}
`;

export const H5 = styled.h5`${shared}`;
export const H6 = styled.h6`${shared}`;
