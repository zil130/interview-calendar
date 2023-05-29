import { createSlice } from '@reduxjs/toolkit';

const getWeekDates = (dateString) => {
  const date = new Date(dateString);
  const monday = new Date(date.getTime());
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  const weekDates = [];
  const daysInWeek = 7;

  for (let i = 0; i < daysInWeek; i += 1) {
    const currentDay = new Date(monday.getTime());
    currentDay.setDate(monday.getDate() + i);
    const formattedDate = currentDay.toDateString();
    const dayOfMonth = currentDay.getDate();
    weekDates.push({ date: formattedDate, dayOfMonth });
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
  const hoursInDay = 24;

  for (let i = 0; i < hoursInDay; i += 1) {
    result[i] = [];
  }

  return result;
};

const date = new Date().toDateString();

const initialState = {
  activeDay: getActiveDay(date),
  timeslots: setTimeslots(),
  forDelete: setTimeslots(),
};

const visibleWeek = createSlice({
  name: 'visibleWeek',
  initialState,
  reducers: {
    plusSevenDays: (state) => {
      const newDate = new Date(state.activeDay.day);
      const daysInWeek = 7;
      newDate.setDate(newDate.getDate() + daysInWeek);

      return {
        ...state,
        activeDay: getActiveDay(newDate.toDateString()),
      };
    },

    minusSevenDays: (state) => {
      const newDate = new Date(state.activeDay.day);
      const daysInWeek = 7;
      newDate.setDate(newDate.getDate() - daysInWeek);

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
      const requestFormat = 'YYYY-MM-DD HH:mm:ss';
      const eventTime = prompt(`Enter event time: ${requestFormat}`);

      if (!eventTime) {
        return state;
      }

      const timeslotDate = new Date(eventTime).toString();

      if (timeslotDate === 'Invalid Date' || eventTime.length !== requestFormat.length) {
        alert('Invalid event time');
        return state;
      }

      const hourOfNewSlot = timeslotDate.slice(16, 18);
      const dateOfNewSlot = timeslotDate.slice(0, 15);

      if (state.timeslots[hourOfNewSlot].includes(dateOfNewSlot)) {
        alert('This slot is already booked. Choose another');
        return state;
      }

      if (new Date() > new Date(eventTime)) {
        alert('The desired time cannot be less than the current time. Choose another');
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

    toggleSlotForDelete: (state, action) => {
      const [hour, day] = action.payload;
      const res = state.forDelete[hour].includes(day)
        ? state.forDelete[hour].filter((item) => item !== day)
        : [...state.forDelete[hour], day];

      return {
        ...state,
        forDelete: {
          ...state.forDelete,
          [hour]: res,
        },
      };
    },

    deleteSlots: (state) => {
      const obj1 = { ...state.timeslots };
      const obj2 = { ...state.forDelete };

      const newTimeslots = Object.keys(obj1).reduce((acc, key) => {
        const values1 = obj1[key];
        const values2 = obj2[key];

        return {
          ...acc,
          [key]: values1.filter((value) => !values2.includes(value)),
        };
      }, {});

      return {
        ...state,
        forDelete: setTimeslots(),
        timeslots: newTimeslots,
      };
    },
  },
});

export const {
  plusSevenDays, minusSevenDays, today, addEventTime, toggleSlotForDelete, deleteSlots,
} = visibleWeek.actions;

export default visibleWeek.reducer;
