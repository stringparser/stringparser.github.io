import styled from 'styled-components';

const styles = {
  inline: {
    width: 'auto',
    margin: '0',
    padding: '0.25rem 0.5rem',
  },
  fullWidth: {
    width: '100%',
    margin: '2rem 0 0 0',
    padding: '1rem',
  },
};

type ButtonProps = {
  variation?: keyof (typeof styles);
};

const Button = styled<ButtonProps, 'button'>('button')`
  cursor: pointer;
  apperance: none;
  text-align: center;

  border: 1px solid currentColor;
  border-radius: 4px;

  color: currentColor;
  background-color: transparent;

  width: ${({ variation }) => styles[variation || 'fullWidth'].width};
  margin: ${({ variation }) => styles[variation || 'fullWidth'].margin};
  padding: ${({ variation }) => styles[variation || 'fullWidth'].padding};
  font-weight: bold;
`;

export default Button;
