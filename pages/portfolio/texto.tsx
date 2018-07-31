import styled from 'styled-components';
import * as txtgen from 'txtgen';
import { Component } from 'react';

import Text from '../../components/Text';
import Page from '../../components/Page';
import { H2 } from '../../components/Heading';
import { HR } from '../../components/Spacing';
import Section from '../../components/section/Section';
import { content, gutter } from '../../components/mixins';
import { zIndex } from '../../components/theme';

function onSelectionChange(component?: TextoPage) {
  console.log('-- \nselectionchange', component);

  const selection = window.getSelection();
  const selectionRange = selection.getRangeAt(0);

  const rect = selectionRange.getBoundingClientRect();
  const selectedText = selection.toString();

  component.setState({
    selectedText,
    menuTop: rect.top - rect.height - 30,
    menuLeft: rect.left,
    isMenuOpen: !!selectedText.trim(),
  });
}

type SelectMenuProps = {
  top: number;
  left: number;
  isMenuOpen: boolean;
};

const SelectMenu = styled<SelectMenuProps, 'div'>('div')`
  z-index: ${zIndex.dialog};

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  position: fixed;

  ${({ isMenuOpen }) => `
    display: ${isMenuOpen ? 'block' : 'none'};
  `}

  color: snow;
  background: rgba(0,0,0,0.9);
  border-radius: 4px;
  ${gutter(0.25)}
`;

type State = {
  menuTop: SelectMenuProps['top'];
  menuLeft: SelectMenuProps['left'];
  isMenuOpen?: boolean;
  selectedText?: string;
};

const contentText = txtgen.article();

class TextoPage extends Component<{}, State> {

  state: State = {
    menuTop: 0,
    menuLeft: 0,
    isMenuOpen: false,
  };

  componentDidMount() {
    document.addEventListener('selectionchange', () => onSelectionChange(this));
  }

  componentWillUnmount() {
    document.removeEventListener('selectionchange', () => onSelectionChange(this));
  }

  render() {
    const {
      menuTop,
      menuLeft,
      isMenuOpen,
      selectedText,
    } = this.state;

    return (
      <Page title="Text select">
        <Section variation="secondary" mixins={[content()]}>
          <SelectMenu
            top={menuTop}
            left={menuLeft}
            isMenuOpen={isMenuOpen}
          >
            {selectedText}
          </SelectMenu>

          <H2>
            Texto
          </H2>
          <HR />

          <Text>
            Text lookup and relationships to other applications is a rather{' '}
            normal feature in different platforms. Different content, like text, is{' '}
            forwared between applications either copying and pasting it. What if we can{' '}
            do the same with an arbitrary service? As much as there are privacy complications here{' '}
            there is also simple and interesting applications to it.
          </Text>

          <pre>
            What follows is random text, select words to see a response.
          </pre>

          <Text>
            {contentText}
          </Text>
        </Section>
      </Page>
    );
  }
}

export default TextoPage;
