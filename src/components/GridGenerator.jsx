import React from 'react';
import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSlotForDelete } from '../slices/visibleWeekSlice';

const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 8);
  height: 50px;
`;

const InnerCell = styled.div`
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  background: ${(props) => props.background};
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
`;

const Time = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  color: var(--text-grey);
  text-align: right;
  margin: -22px 11px 0 0;
  @media (max-width: 570px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    margin: -18px 10px 0 0;
    font-size: 14px;
  }
`;

function GridGenerator() {
  const week = useSelector((state) => state.visibleWeek.activeDay.week.map(({ date }) => date));
  const hoursBooked = useSelector((state) => state.visibleWeek.timeslots);
  const hoursDel = useSelector((state) => state.visibleWeek.forDelete);
  const dispatch = useDispatch();

  const grid = [];
  const rows = 24;
  const columns = 8;

  function createIncrementTime() {
    let time = '00:00';

    return function () {
      const hours = Number(time.slice(0, 2)) + 1;
      const newHours = `${hours}`.padStart(2, '0');
      time = `${newHours}:00`;

      return time;
    };
  }

  const incrementTime = createIncrementTime();

  for (let row = 0; row < rows; row += 1) {
    const rowCells = [];

    for (let col = 0; col < columns; col += 1) {
      const hour = `${row}`.padStart(2, '0');
      const borderRight = (col !== 0 && col !== 7) ? '2px solid var(--border-grey)' : 'none';
      const borderBottom = (col !== 0 && row !== 23) ? '2px solid var(--border-grey)' : 'none';
      const background = (hoursDel[hour].includes(week[col - 1])) ? 'var(--bg-slot-selected)' : 'var(--bg-slot-booked)';
      const timeSlot = (!col && row) ? incrementTime() : `${row}-${week[col - 1]}`;

      const inner = (hoursBooked[hour].includes(week[col - 1]))
        ? (
          <InnerCell
            background={background}
            onClick={() => dispatch(toggleSlotForDelete([hour, week[col - 1]]))}
          />
        )
        : undefined;

      rowCells.push(
        <Cell
          key={timeSlot}
          style={{ borderRight, borderBottom }}
        >
          {(!col && row) ? <Time>{timeSlot}</Time> : inner}
        </Cell>,
      );
    }

    grid.push(<Row key={row}>{rowCells}</Row>);
  }

  return grid;
}

export default GridGenerator;
