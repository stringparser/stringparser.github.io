import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import { colors, zIndex, boxShadow } from './sharedStyles';

export const navbarHeight = '60px';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${navbarHeight};
  padding: 1rem 2rem;
  z-index: ${zIndex.navbar};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.7);
`;

const NavItem = styled.div`
  &:first-of-type {
    text-align: left;
  }

  &:last-of-type {
    text-align: right;
  }

  a {
    color: currentColor;
    text-transform: uppercase;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.link};
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Navbar: React.SFC = ({ children }) => (
  <Nav>
    <NavItem>
      <Link href="/">
        <a>Javier Carrillo Milla</a>
      </Link>
    </NavItem>
    <NavItem>
      {children}
    </NavItem>
  </Nav>
);

export default withRouter(Navbar);
