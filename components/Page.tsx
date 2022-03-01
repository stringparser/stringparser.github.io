import Head from 'next/head';
import { createGlobalStyle } from 'styled-components'

import { forMedia } from './mixins';
import { contentFont } from './Font';

import Navbar from './Navbar';
import Footer from './Footer';
import { BACKEND_URL, META_KEYWORDS, TWITTER_URL } from '../config/client';
import { AnalyticsHeadScript } from './Analytics';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 15px;
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
    font-family: ${contentFont};
    background-color: snow;
  }

  * {
    z-index: 0;
    box-sizing: border-box;
  }

  li {
    line-height: 1.6rem;
  }

  a {
    color: currentColor;
  }
`;

const logo = `${BACKEND_URL}/static/img/logo.png`;

type PageProps = {
  title: string;
};

const Page: React.SFC<PageProps> = ({ title, children }) => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width" user-scalable="no" />

      <title>{title}</title>
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="description" content="Javier Carrillo Milla. Freelance Software Engineer" />

      <meta name="theme-color" content="#000" />
      <link rel="apple-touch-icon" href={logo} />
      <link rel="icon" type="image/png" href={logo} />

      <link rel="me" href={TWITTER_URL} />
      <link rel="canonical" href={BACKEND_URL} />
      <meta property="og:site_name" content="Javier Carrillo Milla" />
      <meta property="og:url" content={BACKEND_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Javier Carrillo Milla" />
      <meta property="og:description" content="Freelance Software Engineer" />

      <AnalyticsHeadScript />
    </Head>

    <GlobalStyle />

    <Navbar />

    {children}

    <Footer />
  </main>
);

export default Page;
