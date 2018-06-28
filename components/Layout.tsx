import Head from 'next/head';
import styled, { injectGlobal } from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';

injectGlobal`
  html,
  body {
    margin: 0;
  }

  color: rgba(0,0,0,0.8);
  background-color: snow;
`;

const Main = styled.main`
  font-size: 16px;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
`;

const Layout: React.SFC = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
      />
    </Head>
    <Main>
      <Navbar />
      {children}
      <Footer>
        linkedin
      </Footer>
    </Main>
  </>
);

export default Layout;
