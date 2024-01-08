import { configureStore } from '@reduxjs/toolkit';

import sortReducer from '../slices/sortSlice';

const store = configureStore({
  reducers: {
    sort: sortReducer,
  },
});

export default store;
