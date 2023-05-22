import { createSlice } from '@reduxjs/toolkit';

const activeDaySlice = createSlice({
  name: 'activeDay',
  initialState: new Date(),
  reducers: {},
});

export default activeDaySlice.reducer;
