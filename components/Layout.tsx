import Head from 'next/head';
import styled, { injectGlobal } from 'styled-components';

import { zIndex } from './theme';
import { forMedia } from './mixins';
import { FontHeadLink, contentFont } from './Font';

import Navbar from './Navbar';
import Footer from './Footer';

injectGlobal`
  html {
    font-size: 12px;
  }
  ${forMedia('tablet', `
    html {
      font-size: 16px;
    }
  `)}

  html,
  body {
    margin: 0;
  }

  body {
    ${contentFont}
    background-color: snow;
  }

  * {
    z-index: ${zIndex.foreground};
    transition: all 100ms ease-in-out;
    box-sizing: border-box;
  }
`;

const Layout: React.SFC = ({ children }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>stringparser</title>
      <meta name="viewport" content="width=device-width" user-scalable="no" />
      <meta name="description" content="Software Engineer. code, music and physics" />
      <FontHeadLink />
    </Head>

    <Navbar />

    {children}

    <Footer />
  </main>
);

export default Layout;
