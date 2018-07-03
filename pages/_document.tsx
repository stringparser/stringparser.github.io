import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>stringparser</title>
          <meta name="viewport" content="width=device-width" user-scalable="no" />
          <meta name="description" content="Software Engineer. code, music and physics" />
          {this.props.styleTags}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
