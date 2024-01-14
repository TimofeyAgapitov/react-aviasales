import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 5,
};

const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setNext: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { setNext } = loadSlice.actions;
export default loadSlice.reducer;
