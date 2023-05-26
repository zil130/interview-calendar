import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Wrapper from './Wrapper';

const StyledWeekByHours = styled.div`
  background: var(--bg-white);
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Cell = styled.div`
  width: calc(100% / 8);
  height: 50px;
`;

const Row = styled.div`
  display: flex;
`;

const Time = styled.span`
  display: block;
  margin: -11px 11px 0 0;
  color: var(--text-grey);
  text-align: right;
  @media (max-width: 570px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

function GridGenerator() {
  const week = useSelector((state) => state.visibleWeek.activeDay.week.map(({ date }) => date));
  const hoursBooked = useSelector((state) => state.visibleWeek.timeslots);

  const grid = [];
  const rows = 24;
  const columns = 8;

  function createIncrementTime() {
    let time = '00:00';

    return function () {
      const hours = Number(time.slice(0, 2)) + 1;
      const newHours = hours.toString().padStart(2, '0');
      time = `${newHours}:00`;

      return time;
    };
  }

  const incrementTime = createIncrementTime();

  for (let row = 0; row < rows; row += 1) {
    const rowCells = [];

    for (let col = 0; col < columns; col += 1) {
      const borderRight = (col !== 0 && col !== 7) ? '2px solid var(--border-grey)' : 'none';
      const borderBottom = (col !== 0 && row !== 23) ? '2px solid var(--border-grey)' : 'none';
      const background = (hoursBooked[row].includes(week[col - 1])) ? 'var(--bg-slot-book)' : 'transparent';
      const timeSlot = (!col && row) ? incrementTime() : `${row}-${week[col - 1]}`;

      rowCells.push(
        <Cell
          key={timeSlot}
          style={{ borderRight, borderBottom, background }}
        >
          {(!col && row) ? <Time>{timeSlot}</Time> : ''}
        </Cell>,
      );
    }

    grid.push(<Row key={row}>{rowCells}</Row>);
  }

  return grid;
}

function WeekByHours() {
  return (
    <StyledWeekByHours>
      <Wrapper
        display="block"
        padding="20px 0 0"
        paddinglessthan570="20px 0 0"
      >
        <GridGenerator />
      </Wrapper>
    </StyledWeekByHours>
  );
}

export default WeekByHours;
