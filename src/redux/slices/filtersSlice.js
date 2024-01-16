import { createSlice } from '@reduxjs/toolkit';

import { dataFilters } from '../../services/data';

const initialState = {
  filterBy: [0, 1, 2, 3, 4],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { id } = action.payload;

      if (id === 0) {
        if (state.filterBy.includes(0)) {
          state.filterBy = [];
        } else {
          state.filterBy = [0, 1, 2, 3, 4];
        }
      } else {
        if (state.filterBy.includes(id)) {
          state.filterBy = state.filterBy.filter(
            (item) => item !== id && item !== 0
          );
        } else {
          state.filterBy = [...state.filterBy, id];

          const containsAllNumbers = [1, 2, 3, 4].every((number) =>
            state.filterBy.includes(number)
          );
          if (containsAllNumbers && !state.filterBy.includes(0)) {
            state.filterBy = [...state.filterBy, 0];
          }
        }
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
