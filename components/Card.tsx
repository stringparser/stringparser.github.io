import styled from 'styled-components';

import { boxShadow, gutter, forMedia } from './mixins';

const StyledCard = styled<CardProps, 'div'>('div')`
  ${gutter(2)}

  cursor: pointer;
  position: relative;

  color: black;
  border: 2px solid rgba(0,0,0,0.7);
  background-color: white;

  &:hover {
    color: white;
    background-color: rgba(0,0,0,0.7);

    a {
      color: #fbf36d;
      background: unset;
    }
  }

  &:after {
    top: 0.5rem;
    right: 1rem;
    content: '+';
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ${boxShadow()}

  ${forMedia('tablet', `
    max-width: 300px;
    ${gutter(1)}
  `)}

  a {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 60%,
      #fbf36d 60%,
      #fbf36d 100%
    );
    text-decoration: none;
  }
`;

const onClick = (href: string) => () => {
  if (href) {
    window.location.assign(href);
  }
};

type CardProps = {
  href?: string;
};

const Card: React.SFC<CardProps> = ({ href, children }) => (
  <StyledCard onClick={onClick(href)}>
    {children}
  </StyledCard>
);

export default Card;
