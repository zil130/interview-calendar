import { createSlice } from '@reduxjs/toolkit';

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

const getActiveDay = (date) => ({
  day: date,
  month: new Date(date).toLocaleString('en-US', { month: 'long' }),
  year: new Date(date).getFullYear(),
  week: getWeekDates(date),
});

const setTimeslots = () => {
  const result = {};

  for (let i = 0; i < 24; i += 1) {
    result[i] = [];
  }

  return result;
};

const date = new Date().toDateString();

const initialState = {
  activeDay: getActiveDay(date),
  timeslots: setTimeslots(),
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
        activeDay: getActiveDay(newDate.toDateString()),
      };
    },

    minusSevenDays: (state) => {
      const newDate = new Date(state.activeDay.day);
      newDate.setDate(newDate.getDate() - 7);

      return {
        ...state,
        activeDay: getActiveDay(newDate.toDateString()),
      };
    },

    today: (state, action) => ({
      ...state,
      activeDay: getActiveDay(action.payload),
    }),

    addEventTime: (state) => {
      const eventTime = prompt('Enter event time: YYYY-MM-DD HH:mm:ss');

      if (new Date(Date.parse(eventTime)).toDateString() === 'Invalid Date') {
        alert('Invalid event time');
        return state;
      }

      const timeslotDate = new Date(eventTime).toString();
      const hourOfNewSlot = timeslotDate.slice(16, 18);
      const dateOfNewSlot = timeslotDate.slice(0, 15);

      if (state.timeslots[hourOfNewSlot].includes(dateOfNewSlot)) {
        alert('This slot is already booked. Choose another');
        return state;
      }

      return {
        ...state,
        timeslots: {
          ...state.timeslots,
          [hourOfNewSlot]: [
            ...state.timeslots[hourOfNewSlot],
            dateOfNewSlot,
          ],
        },
      };
    },
  },
});

export const {
  plusSevenDays, minusSevenDays, today, addEventTime,
} = visibleWeek.actions;

export default visibleWeek.reducer;
