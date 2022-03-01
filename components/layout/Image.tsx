import styled from 'styled-components';

import { BACKEND_URL } from '../../config/client';

type ImageProps = {
  src: string;
  dim?: number;
  width?: number;
  height?: number;
};

const Image = styled('img')`
  max-width: ${({ dim, width }: ImageProps) => width || dim || 150}px;
  max-height: ${({ dim, height }: ImageProps) => height || dim || 150}px;
`;

const _Image: React.FC<ImageProps> = ({ src, ...props }) => (
  <Image src={`${BACKEND_URL}${src}`} {...props} />
);

export default _Image;
