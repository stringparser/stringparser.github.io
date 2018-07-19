import Link from 'next/link';
import styled from 'styled-components';
import { Component } from 'react';

import { colors, zIndex } from './theme';

export const navbarHeight = 4;

type NavProps = {
  topPos?: number
};

const Nav = styled<NavProps, 'nav'>('nav')`
  top: ${({ topPos }) => topPos || 0}%;
  left: 0;
  right: 0;
  height: ${navbarHeight}rem;
  padding: 1rem 2rem;
  z-index: ${zIndex.navbar};
  position: fixed;
  transition: top 500ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
  background-color: rgba(0, 0, 0, 0.3);

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

type State = {
  topPos: number;
  scrollY: number;
};

class Navbar extends Component {

  state: State = {
    topPos: 0,
    scrollY: 0,
  };

  onScroll = () => {
    const scrollY = window.scrollY;
    const nextState = { scrollY, topPos: 0 };

    if (scrollY > this.state.scrollY) {
      nextState.topPos = -100;
    }

    this.setState(nextState);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { topPos } = this.state;

    return (
      <Nav topPos={topPos}>
        <NavItem>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/resume">
            <a>Resume</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavItem>
      </Nav>
    );
  }
}

export default Navbar;
