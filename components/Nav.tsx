import styled from 'styled-components';

import { gutter } from './styles';

const Nav = styled.nav`
  padding: ${gutter.top} ${gutter.right};
  text-align: right;

  & > a {
    color: currentColor;
    text-transform: uppercase;
    text-decoration: none;
  }

  & > a:not(:last-child) {
    margin-right: ${gutter.right};
  }
`;

export default Nav;
