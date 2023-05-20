import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const daysOfMonth = [25, 26, 27, 28, 29, 30, 31];
const month = 'March';
const year = 2019;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    ". weekday weekday weekday weekday weekday weekday weekday"
    ". day-of-month day-of-month day-of-month day-of-month day-of-month day-of-month day-of-month"
    ". prev month-year month-year month-year month-year month-year next";
  background: var(--bg-smoke);
  border-top: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
`;

const Weekdays = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: weekday;
`;

const Weekday = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 0;
`;

const DaysOfMonth = styled(Weekdays)`
  grid-area: day-of-month;
`;

const DayOfMonth = styled(Button)`
  width: 100%;
  height: 100%;
`;

const MonthYear = styled(Weekdays)`
  grid-area: month-year;
`;

const ButtonPrev = styled(Button)`
  grid-area: prev;
`;

const ButtonNext = styled(Button)`
  grid-area: next;
`;

function Calendar() {
  return (
    <Container>
      <Weekdays>
        {
          weekdays.map((weekday) => <Weekday key={weekday}>{weekday[0].toUpperCase()}</Weekday>)
        }
      </Weekdays>
      <DaysOfMonth>
        {
          daysOfMonth.map((dayOfMonth) => <DayOfMonth key={dayOfMonth} color="var(--text-black)">{dayOfMonth}</DayOfMonth>)
        }
      </DaysOfMonth>
      <ButtonPrev fontSize="var(--fs-pm)">&lsaquo;</ButtonPrev>
      <MonthYear>{`${month} ${year}`}</MonthYear>
      <ButtonNext fontSize="var(--fs-pm)">&rsaquo;</ButtonNext>
    </Container>
  );
}

export default Calendar;
