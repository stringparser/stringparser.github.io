import Head from 'next/head';

import { zIndex } from './theme';
import { FontHeadLink, contentFontStyle } from './Font';

const Layout: React.SFC = ({ children }) => (
  <main>
    <Head>
      <FontHeadLink />
    </Head>

    {children}

    <style jsx={true}>
    {`
      z-index: ${zIndex.background};
      position: relative;
    `}
    </style>

    <style jsx={true} global={true}>
      {`
        html,
        body {
          margin: 0;
        }

        body {
          ${contentFontStyle}
          background-color: snow;
        }

        * {
          z-index: ${zIndex.foreground};
          transition: all 250ms ease-in-out;
          box-sizing: border-box;
        }
      `}
    </style>
  </main>
);

export default Layout;
