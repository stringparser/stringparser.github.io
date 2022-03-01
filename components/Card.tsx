import styled from 'styled-components';

import { boxShadow, gutter, linkHighlight } from './mixins';

const StyledCard = styled('div')<CardProps>`
  ${gutter(1.5)}

  cursor: pointer;
  margin: 0 auto;
  position: relative;
  max-width: 300px;

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
  ${linkHighlight()}
`;

const onClick = (href: string) => () => {
  if (href) {
    window.location.assign(href);
  }
};

type CardProps = {
  href?: string;
};

const Card: React.FC<CardProps> = ({ href, children }) => (
  <StyledCard onClick={onClick(href)}>
    {children}
  </StyledCard>
);

export default Card;
