
const Text: React.SFC = ({ children }) => (
  <p>
    {children}
    <style jsx={true}>
    {`
      margin: 1.4rem auto;
      font-size: 1rem;
      line-height: 2rem;
    `}
    </style>
  </p>
);

export default Text;
