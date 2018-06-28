import Head from 'next/head';
import styled, { injectGlobal } from 'styled-components';
import { zIndex } from './sharedStyles';

injectGlobal`
  html,
  body {
    margin: 0;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  color: rgba(0,0,0,0.8);
  background-color: snow;

  * {
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  z-index: ${zIndex.background};
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
      {children}
    </Main>
  </>
);

export default Layout;
