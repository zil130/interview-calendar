import { createSlice } from '@reduxjs/toolkit';

const getAactiveDay = (date) => ({
  day: date.toDateString(),
  month: date.toLocaleString('en-US', { month: 'long' }),
  year: date.getFullYear(),
});

const getWeekDates = (date) => {
  const dayOfWeek = new Date(date).getDay();
  const monday = new Date(date);
  monday.setDate(new Date(date).getDate() - dayOfWeek + 1);
  const weekDates = [];

  for (let i = 0; i < 7; i += 1) {
    const newDate = new Date(monday);
    newDate.setDate(monday.getDate() + i);
    weekDates.push({ date: newDate.toDateString(), dayOfMonth: newDate.getDate() });
  }

  return weekDates;
};

const date = new Date();

const initialState = {
  activeDay: getAactiveDay(date),
  daysOfMonth: getWeekDates(date),
};

const visibleWeek = createSlice({
  name: 'visibleWeek',
  initialState,
  reducers: {
    plusSevenDays: (state) => {
      const newDate = new Date(state.activeDay.day);
      newDate.setDate(newDate.getDate() + 7);

      return {
        ...state,
        activeDay: getAactiveDay(newDate),
        daysOfMonth: getWeekDates(newDate),
      };
    },

    minusSevenDays: (state) => {
      const newDate = new Date(state.activeDay.day);
      newDate.setDate(newDate.getDate() - 7);

      return {
        ...state,
        activeDay: getAactiveDay(newDate),
        daysOfMonth: getWeekDates(newDate),
      };
    },
  },
});

export const { plusSevenDays } = visibleWeek.actions;
export const { minusSevenDays } = visibleWeek.actions;

export default visibleWeek.reducer;
