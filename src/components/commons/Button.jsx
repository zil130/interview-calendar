import React from 'react';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  font-size: ${(props) => props.fontSize || 'var(--fs-md)'};
  border: 0;
  background: transparent;
  color: ${(props) => props.color || 'var(--red)'};
  outline: none;
  cursor: pointer;
`;

function Button(props) {
  return (
    <StyledButton {...props} />
  );
}

export default Button;
