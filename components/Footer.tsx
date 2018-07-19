import styled from 'styled-components';
import Layer from './Layer';
import { gutter } from './mixins';

const Footer = styled.footer`
  position: relative;
  text-align: center;

  &:after {
    top: 0;
    left: 2.5vw;
    right: 2.5vw;
    width: 95vw;
    content: '';
    position: absolute;
    border-top: 1px solid rgba(0,0,0,0.2);
  }
`;

export default () => (
  <Footer>
    <Layer mixins={[gutter()]}>
      © {(new Date()).getFullYear()} - Javier Carrillo Milla
    </Layer>
  </Footer>
);
