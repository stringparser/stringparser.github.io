import styled from 'styled-components';

import { BACKEND_URL } from '../../config/client';

type ImageProps = {
  src: string;
  dim?: number;
  width?: number;
  height?: number;
};

const Image = styled<ImageProps, 'img'>('img')`
  max-width: ${({ dim, width }) => width || dim || 150}px;
  max-height: ${({ dim, height }) => height || dim || 150}px;
`;

const _Image: React.SFC<ImageProps> = ({ src, ...props }) => (
  <Image src={`${BACKEND_URL}${src}`} {...props} />
);

export default _Image;
