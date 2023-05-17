import React from 'react';
import { styled } from 'styled-components';
import Wrapper from './Wrapper';
import Button from './Button';

const Title = styled.h1`
  font-size: var(--fs-lg);
  font-weight: var(--fw-regular);
  letter-spacing: -1px;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Interview Calendar</Title>
      <Button fontSize="var(--fs-pm)">+</Button>
    </Wrapper>
  );
}

export default Header;
