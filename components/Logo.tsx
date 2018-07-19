import styled from 'styled-components';

type LogoProps = {
  dim?: string;
};

const Logo = styled<LogoProps, 'div'>('div')`
  color: currentColor;
  width: ${({ dim }) => dim || '32px'};
  height: ${({ dim }) => dim || '32px'};
  background: url('/static/img/logo.svg') center center no-repeat;
  background-size: cover;
`;

const _Logo: React.SFC<LogoProps> = ({ dim }) => (
  <Logo dim={dim} />
);

export default _Logo;
