import styled from 'styled-components';
import { BACKEND_URL } from '../config/client';

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
    <img src={`${BACKEND_URL}/static/img/logo.png`} />
  </Logo>
);

export default _Logo;
