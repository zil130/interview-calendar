import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import Button from './Button';

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
  function getWeekDates(date) {
    const dayOfWeek = new Date(date).getDay();
    const monday = new Date(date);
    monday.setDate(new Date(date).getDate() - dayOfWeek + 1);
    const weekDates = [];

    for (let i = 0; i < 7; i += 1) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + i);
      weekDates.push(currentDate);
    }

    return weekDates;
  }

  const activeDay = useSelector((state) => state.activeDay);
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const daysOfMonth = getWeekDates(activeDay)
    .map((date) => ({ date: date.toDateString(), dayOfMonth: date.getDate() }));
  const monthYear = `${activeDay.toLocaleString('en-US', { month: 'long' })} ${activeDay.getFullYear()}`;

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
      <ButtonPrev fontSize="var(--fs-pm)">&lsaquo;</ButtonPrev>
      <MonthYear>{monthYear}</MonthYear>
      <ButtonNext fontSize="var(--fs-pm)">&rsaquo;</ButtonNext>
    </Container>
  );
}

export default Calendar;
