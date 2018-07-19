import Link from 'next/link';
import styled from 'styled-components';

import { colors } from './theme';
import { boxShadow, forMedia } from './mixins';

const StyledCard = styled<CardProps, 'div'>('div')`
  padding: 1rem;
  position: relative;

  ${forMedia('tablet', `
    padding: 1.5rem;
    max-width: 25vw;
  `)}

  cursor: pointer;
  border: 2px solid snow;

  &:hover {
    opacity: 1;

    color: black;
    background-color: white;
  }

  &:after {
    top: 0%;
    right: 0%;
    padding: 0.25rem 0.5rem;
    content: '☆';
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    border-bottom-left-radius: 50%;

    color: white;
  }

  ${boxShadow()}
`;

type CardProps = {
  href?: string;
};

const Card: React.SFC<CardProps> = ({ href, children }) => (
  <Link href={href}>
    <StyledCard>
      {children}
    </StyledCard>
  </Link>
);

export default Card;
