import * as React from 'react';
import { headerFontStyle } from './Font';

const shared = `
  margin: 0;
  ${headerFontStyle}
`;

export const headingStyles = [
  `
    font-size: 2.2rem;
    line-height: 2.4rem;
  `,
  `
    font-size: 2rem;
    line-height: 2.2rem;
  `,
  `
    font-size: 1.4rem;
    line-height: 1.3rem;
  `,
].map(style => `${shared}${style}`);

export const H1: React.SFC = ({ children }) => (
  <h1>
    {children}
    <style jsx={true}>{`${headingStyles[0]}`}</style>
  </h1>
);

export const H2: React.SFC = ({ children }) => (
  <h2>
    {children}
    <style jsx={true}>{`${headingStyles[1]}`}</style>
  </h2>
);

export const H3: React.SFC = ({ children }) => (
  <h3>
    {children}
    <style jsx={true}>{`${headingStyles[2]}`}</style>
  </h3>
);
