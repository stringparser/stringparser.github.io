import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import { forMedia } from './mixins';
import { FontHeadLink, contentFont } from './Font';

import Navbar from './Navbar';
import Footer from './Footer';
import { BACKEND_URL, META_KEYWORDS, TWITTER_URL } from '../config/client.js';

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
    z-index: 0;
    box-sizing: border-box;
  }

  a {
    color: currentColor;
  }
`;

const logo = `${BACKEND_URL}/static/img/logo.png`;

const Layout: React.SFC = ({ children }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <title>Javier Carrillo Milla</title>
      <meta name="keywords" content={META_KEYWORDS} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Freelance Software Engineer" />
      <meta name="viewport" content="width=device-width" user-scalable="no" />

      <FontHeadLink />

      <meta name="theme-color" content="black" />
      <link rel="apple-touch-icon" href={logo} />
      <link rel="icon" type="image/png" href={logo} />

      <link rel="me" href={TWITTER_URL} />
      <link rel="canonical" href={BACKEND_URL} />
      <meta property="og:site_name" content="Javier Carrillo Milla" />
      <meta property="og:url" content={BACKEND_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Javier Carrillo Milla" />
      <meta property="og:description" content="Freelance Software Engineer" />
    </Head>

    <Navbar />

    {children}

    <Footer />
  </main>
);

export default Layout;
