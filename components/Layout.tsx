import Head from 'next/head';
import { injectGlobal } from 'styled-components';

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
    font-smoothing: subpixel-antialiased;
  }

  body {
    ${contentFont}
    background-color: snow;
  }

  * {
    z-index: ${zIndex.foreground};
    box-sizing: border-box;
  }

  a {
    color: currentColor;
  }
`;

const logoIcon = '/static/img/favicon.ico';

const Layout: React.SFC = ({ children }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>stringparser</title>
      <meta name="viewport" content="width=device-width" user-scalable="no" />
      <meta name="description" content="Freelance Software Engineer. code, music and physics" />
      <link rel="icon" sizes="128x128" href={logoIcon} />
      <meta name="theme-color" content="white" />
      <link rel="apple-touch-icon" href={logoIcon} />
      <meta name="viewport" content="width=device-width" user-scalable="no" />
      <meta name="description" content="Bespoke services for artists and exhibitions" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <FontHeadLink />
    </Head>

    <Navbar />

    {children}

    <Footer />
  </main>
);

export default Layout;
