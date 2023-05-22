import { configureStore } from '@reduxjs/toolkit';
import activeDayReducer from './activeDaySlice';

export default configureStore({
  reducer: {
    activeDay: activeDayReducer,
  },
});
