import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: var(--bg-white);
`;

const Title = styled.h1`
  font-size: var(--fs-lg);
  font-weight: var(--fw-regular);
  letter-spacing: -1px;
`;

const Button = styled.button`
  font-size: 56px;
  border: 0;
  background: transparent;
  color: var(--text-red);
  outline: none;
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Interview Calendar</Title>
      <Button>+</Button>
    </Wrapper>
  );
}

export default Header;
