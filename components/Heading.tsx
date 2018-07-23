import styled from 'styled-components';
import { headerFont } from './Font';

const shared = `
  margin: 0;
  ${headerFont}
`;

export const H1 = styled.h1`${shared}
  font-size: 2rem;
  line-height: 3rem;
`;

export const H2 = styled.h2`${shared}
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const H3 = styled.h3`${shared}
  font-size: 1.4rem;
  line-height: 1.3rem;
  font-weight: normal;
`;

export const H4 = styled.h4`${shared}
  font-size: 1.2rem;
  line-height: 1.1rem;
  font-weight: normal;
`;
