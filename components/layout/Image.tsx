import styled from 'styled-components';

import { BACKEND_URL } from '../../config/client';

type ImageProps = {
  src: string;
  dim?: number;
  width?: number;
  height?: number;
};

const Image = styled<ImageProps, 'img'>('img')
  .attrs({
    src: ({ src }: ImageProps) => `${BACKEND_URL}${src}`,
  })
  `
    max-width: ${({ dim, width }) => width || dim || 150}px;
    max-height: ${({ dim, height }) => height || dim || 150}px;
  `
;

export default Image;
