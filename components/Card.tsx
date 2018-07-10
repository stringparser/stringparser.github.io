import styled from 'styled-components';

import { colors } from './theme';
import { boxShadow, forMedia } from './mixins';

const Card = styled.div`
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

  &:hover::after {
    top: 0%;
    right: 0%;
    padding: 0.25rem 0.5rem;
    content: '+';
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    border-bottom-left-radius: 50%;

    color: white;
    background-color: ${colors.info};
  }

  ${boxShadow()}
`;

export default Card;
