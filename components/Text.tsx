
const Text: React.SFC = ({ children }) => (
  <p>
    {children}
    <style jsx={true}>
    {`
      margin: 1rem auto;
      font-size: 1rem;
      white-space: pre-line;
      line-height: 1.75rem;
      margin-bottom: 0;
    `}
    </style>
  </p>
);

export default Text;
