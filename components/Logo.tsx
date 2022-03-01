import styled from 'styled-components';

import Image from './layout/Image';
import { iconSize } from './theme';

type LogoProps = {
  dim?: number;
};

const Logo = styled('div')`
  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${({ dim = iconSize }: LogoProps) => `
    width: ${dim}px;
    height: ${dim}px;
  `}
`;

const _Logo: React.FC<LogoProps> = (props) => (
  <Logo {...props} >
    <Image src="/static/img/logo.png" />
  </Logo>
);

export default _Logo;
