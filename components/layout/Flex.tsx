import styled from 'styled-components';
import { forMedia } from '../mixins';

type FlexProps = {
  alignItems?: React.CSSProperties['alignItems'];
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
};

const Flex = styled<FlexProps, 'div'>('div')`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};

  ${({
    alignItems,
    justifyContent,
  }) => `
    ${alignItems && `align-items: ${alignItems};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
  `}

  ${forMedia('phone', `
    flex-direction: column;
  `)}
`;

export default Flex;
