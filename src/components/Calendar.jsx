import React from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import { plusSevenDays, minusSevenDays } from '../slices/visibleWeekSlice';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    ". weekday weekday weekday weekday weekday weekday weekday"
    ". day-of-month day-of-month day-of-month day-of-month day-of-month day-of-month day-of-month"
    ". prev month-year month-year month-year month-year month-year next";
  background: var(--bg-grey);
  border-top: 2px solid var(--border-grey);
  border-bottom: 2px solid var(--border-grey);
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

const DayOfMonth = styled(Weekday)`
  font-size: var(--fs-md);
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
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const activeDay = useSelector((state) => state.visibleWeek.activeDay);
  const daysOfMonth = useSelector((state) => state.visibleWeek.activeDay.week);
  const monthYear = `${activeDay.month} ${activeDay.year}`;
  const dispatch = useDispatch();

  return (
    <Container>
      <Weekdays>
        {
          weekdays.map((weekday) => (
            <Weekday key={weekday}>
              {weekday[0].toUpperCase()}
            </Weekday>
          ))
        }
      </Weekdays>
      <DaysOfMonth>
        {
          daysOfMonth.map(({ date, dayOfMonth }) => (
            <DayOfMonth key={date}>
              {dayOfMonth}
            </DayOfMonth>
          ))
        }
      </DaysOfMonth>
      <ButtonPrev
        fontSize="var(--fs-pm)"
        onClick={() => dispatch(minusSevenDays())}
      >
        &lsaquo;
      </ButtonPrev>
      <MonthYear>{monthYear}</MonthYear>
      <ButtonNext
        fontSize="var(--fs-pm)"
        onClick={() => dispatch(plusSevenDays())}
      >
        &rsaquo;
      </ButtonNext>
    </Container>
  );
}

export default Calendar;
