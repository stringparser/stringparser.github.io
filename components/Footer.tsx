import styled from 'styled-components';
import Layer from './Layer';
import { gutter } from './mixins';

const Footer = styled.footer`
  padding: 2rem 0;
  position: relative;
  text-align: center;
`;

export default () => (
  <Footer>
    <Layer mixins={[gutter()]}>
      © {(new Date()).getFullYear()} Javier Carrillo Milla
    </Layer>
  </Footer>
);
