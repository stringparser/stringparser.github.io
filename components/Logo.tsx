import styled from 'styled-components';

type LogoProps = {
  dim?: number;
};

const Logo = styled<LogoProps, 'div'>('div')`
  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${({ dim = 32 }) => `
    width: ${dim}px;
    height: ${dim}px;
  `}
`;

const _Logo: React.SFC<LogoProps> = (props) => (
  <Logo {...props} >
    <img src="/static/img/logo.png" />
  </Logo>
);

export default _Logo;
