import styled from 'styled-components';

import Image from './layout/Image';
import { iconSize } from './theme';

type LogoProps = {
  dim?: number;
};

const Logo = styled<LogoProps, 'div'>('div')`
  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${({ dim = iconSize }) => `
    width: ${dim}px;
    height: ${dim}px;
  `}
`;

const _Logo: React.SFC<LogoProps> = (props) => (
  <Logo {...props} >
    <Image src="/static/img/logo.png" />
  </Logo>
);

export default _Logo;
