import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadCount: 5,
};

const loadSlice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setLoadMore: (state, action) => {
      state.loadCount += action.payload;
    },
  },
});

export const { setLoadMore } = loadSlice.actions;
export default loadSlice.reducer;
