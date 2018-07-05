import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import { colors, zIndex } from './theme';

export const navbarHeight = '4rem';

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

  color: white;
  background-color: rgba(0, 0, 0, 0.1);

  &:hover {
    a {
      opacity: 0.5;
    }
  }
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
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.link};
    opacity: 1;
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Navbar: React.SFC = ({ children }) => (
  <Nav>
    <NavItem>
      <Link href="/">
        <a>Javier Carrillo</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/#about">
        <a>About</a>
      </Link>
      <Link href="/#services">
        <a>Services</a>
      </Link>
      <Link href="/#contact">
        <a>Contact</a>
      </Link>
    </NavItem>
  </Nav>
);

export default withRouter(Navbar);
