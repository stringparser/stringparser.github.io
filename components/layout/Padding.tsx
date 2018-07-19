import styled from 'styled-components';

const padding = {
  small: '2rem',
  medium: '4rem',
  large: '5rem',
  huge: '6rem',
};

type PaddingProps = {
  size?: keyof (typeof padding)
};

const Padding = styled<PaddingProps, 'div'>('div')`
  padding: ${(props) => padding[props.size || 'medium']}
`;

export default Padding;
