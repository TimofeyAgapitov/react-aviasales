import { configureStore } from '@reduxjs/toolkit';

import sortReducer from '../slices/sortSlice';
import themeReducer from '../slices/themeSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    theme: themeReducer,
  },
});

export default store;
