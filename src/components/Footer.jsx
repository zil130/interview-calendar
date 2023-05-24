import React from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from './Wrapper';
import Button from './Button';
import { today } from '../slices/visibleWeekSlice';

function Footer() {
  const dispatch = useDispatch();

  return (
    <Wrapper
      background="var(--bg-smoke)"
      bordertop="2px solid lightgrey"
    >
      <Button
        onClick={() => dispatch(today(new Date()))}
      >
        Today
      </Button>
    </Wrapper>
  );
}

export default Footer;
