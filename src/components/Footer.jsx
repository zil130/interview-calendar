import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from './Wrapper';
import Button from './Button';
import { today, deleteSlots } from '../slices/visibleWeekSlice';

function Footer() {
  const forDelete = useSelector((state) => state.visibleWeek.forDelete);
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
      {Object.values(forDelete).flat().length
        ? <Button onClick={() => dispatch(deleteSlots())}>Delete</Button>
        : undefined}
    </Wrapper>
  );
}

export default Footer;
