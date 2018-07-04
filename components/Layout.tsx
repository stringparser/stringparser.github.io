import styled, { injectGlobal } from 'styled-components';

import font from '../vendor/SourceSansPro';
import { zIndex, forMedia } from './theme';

injectGlobal`
  ${font}

  ${forMedia('tablet', `
    html {
      font-size: 14px;
    }
  `)}

  html, body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  color: rgba(0,0,0,0.8);
  background-color: snow;

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;

const Main = styled.main`
  z-index: ${zIndex.background};
`;

const Layout: React.SFC = ({ children }) => (
  <>
    <Main>
      {children}
    </Main>
  </>
);

export default Layout;
