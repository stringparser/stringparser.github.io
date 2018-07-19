import styled from 'styled-components';

type ImageProps = {
  dim?: number;
  width?: number;
  height?: number;
};

const Image = styled<ImageProps, 'img'>('img')`
  max-width: ${({ dim, width }) => width || dim || 150}px;
  max-height: ${({ dim, height }) => height || dim || 150}px;
`;

export default Image;
