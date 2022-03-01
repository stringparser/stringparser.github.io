import styled from 'styled-components';

import ChevronDown from '../icon/ChevronDown';
import { SectionProps } from './Section';
import { zIndex, iconSize } from '../theme';

const RoundIconContainer = styled.div`
  top: -${iconSize / 2}px;
  left: 0;
  right: 0;
  z-index: ${zIndex.section + 1};
  position: absolute;
  text-align: center;

  a {
    color: white;
    display: block;
  }

  svg {
    padding: ${iconSize * 0.25}px;
    box-shadow: 0 0 1px 1px rgba(255,255,255,0.7);
    border-radius: 50%;
    background-color: #000;
  }
`;

const SectionLink: React.FC<SectionProps> = ({ id }) => (
  <RoundIconContainer>
    <a href={`#${id}`}>
      <ChevronDown />
    </a>
  </RoundIconContainer>
);

export default SectionLink;
