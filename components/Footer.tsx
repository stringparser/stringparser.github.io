import styled from 'styled-components';
import Layer from './Layer';
import { gutter, align } from './mixins';

const Footer = styled.footer`
  ${gutter(0.5)}
  ${align('t-center')}

  color: white;
  background-color: rgba(0,0,0, 0.8);
`;

export default () => (
  <Footer>
    <Layer mixins={[gutter()]}>
      © {(new Date()).getFullYear()} Javier Carrillo Milla
    </Layer>
  </Footer>
);
