import { configureStore } from '@reduxjs/toolkit';

import sortReducer from '../slices/sortSlice';
import themeReducer from '../slices/themeSlice';
import filterReducer from '../slices/filtersSlice';
import ticketsReducer from '../slices/ticketsSlice';
import loadReducer from '../slices/loadSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    theme: themeReducer,
    filters: filterReducer,
    tickets: ticketsReducer,
    load: loadReducer,
  },
});

export default store;
