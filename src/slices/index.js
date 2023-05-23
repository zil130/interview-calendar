import { configureStore } from '@reduxjs/toolkit';
import visibleWeekReducer from './visibleWeekSlice';

export default configureStore({
  reducer: {
    visibleWeek: visibleWeekReducer,
  },
});
