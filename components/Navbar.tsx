import Link from 'next/link';
import styled from 'styled-components';
import { createRef, Component, RefObject } from 'react';

import Logo from './Logo';
import { zIndex } from './theme';

export const navbarHeight = 4;

type NavProps = {
  topPos?: number;
  position?: 'static' | 'fixed';
};

const Nav = styled<NavProps, 'nav'>('nav')`
  top: ${({ topPos }) => topPos || 0}%;
  left: 0;
  right: 0;
  height: ${navbarHeight}rem;
  padding: 1rem 2rem;
  z-index: ${zIndex.navbar};
  position: ${({ position }) => position || 'static' };
  transition: top 500ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.9);
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
    text-decoration: underline;
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
`;

type State = {
  topPos: number;
  scrollY: number;
  position: NavProps['position'];
  isPastFirstSection: boolean;
};

class Navbar extends Component {

  state: State = {
    topPos: 0,
    scrollY: 0,
    position: 'static',
    isPastFirstSection: false,
  };

  navRef: RefObject<HTMLElement>;

  constructor(props?: Object, context?: Object) {
    super(props, context);
    this.navRef = createRef();
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    const navHeight = this.navRef.current.offsetHeight;

    const nextState = {
      scrollY,
      topPos: scrollY > this.state.scrollY ? -100 : 0,
      position: scrollY > navHeight ? 'fixed' : 'static',
    };

    this.setState(nextState);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { topPos, position } = this.state;

    return (
      <>
        <Nav
          topPos={topPos}
          position={position}
          innerRef={this.navRef}
        >
          <NavItem>
            <Link href="/">
              <a><Logo /></a>
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
        {position === 'fixed'
          ? <div style={{ height:`${navbarHeight}rem` }} />
          : null
        }
      </>
    );
  }
}

export default Navbar;
