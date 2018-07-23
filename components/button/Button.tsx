import styled from 'styled-components';
import { forMedia } from '../mixins';

const styles = {
  inline: `
    width: auto;
    margin: 0;
    padding: 0.25rem 0.5rem;
  `,
  fullWidth: `
    width: 100%;
    margin: 2rem 0 0 0;
    padding: 1rem;
    font-size: 0.85rem;

    ${forMedia('tablet', `
      max-width: 320px;
    `)}
  `,
};

type ButtonProps = {
  variation?: keyof (typeof styles);
};

const Button = styled<ButtonProps, 'button'>('button')`
  cursor: pointer;
  apperance: none;
  text-align: center;

  ${({ variation = 'fullWidth' }) => styles[variation]}

  border: 2px solid currentColor;

  color: currentColor;
  background-color: transparent;
`;

export default Button;
