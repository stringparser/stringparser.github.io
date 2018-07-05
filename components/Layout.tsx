import Head from 'next/head';

import { zIndex } from './theme';
import { FontHeadLink, contentFont } from './Font';
import { forMedia } from './mixins';
import { injectGlobal } from 'styled-components';

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
    transition: all 250ms ease-in-out;
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

    {children}

    <style jsx={true}>
    {`
      z-index: ${zIndex.background};
      position: relative;
    `}
    </style>
  </main>
);

export default Layout;
