import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import Wrapper from './Wrapper';
import Button from './Button';
import { addEventTime } from '../slices/visibleWeekSlice';

const Title = styled.h1`
  font-size: var(--fs-lg);
  font-weight: var(--fw-regular);
  letter-spacing: -1px;
`;

function Header() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title>Interview Calendar</Title>
      <Button
        fontSize="var(--fs-pm)"
        onClick={() => dispatch(addEventTime())}
      >
        +
      </Button>
    </Wrapper>
  );
}

export default Header;
