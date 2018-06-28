import Link from 'next/link';

import Nav from './Nav';

const Navbar = () => (
  <Nav>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/services">
      <a>Services</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </Nav>
);

export default Navbar;
