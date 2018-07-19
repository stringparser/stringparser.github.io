import styled from 'styled-components';

type FlexItemProps = {
  flex?: React.CSSProperties['flex'];
};

const FlexItem = styled<FlexItemProps, 'div'>('div')`
  display: inline-block;
  position: relative;

  & > * {
    max-width: 100%;
    max-height: 100%;
  }

  ${props => `
    flex: ${props.flex || 1};
  `}
`;

export default FlexItem;
