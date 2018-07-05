import styled from 'styled-components';
import { boxShadow } from './mixins';

const Card = styled.div`
  padding: 2rem 1.5rem;

  background-color: white;

  ${boxShadow()}
`;

export default Card;
