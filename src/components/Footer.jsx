import React from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from './Wrapper';
import Button from './Button';
import { today } from '../slices/visibleWeekSlice';

function Footer() {
  const dispatch = useDispatch();

  return (
    <Wrapper
      background="var(--bg-grey)"
      bordertop="2px solid var(--border-grey)"
    >
      <Button
        onClick={() => dispatch(today(new Date().toDateString()))}
      >
        Today
      </Button>
    </Wrapper>
  );
}

export default Footer;
