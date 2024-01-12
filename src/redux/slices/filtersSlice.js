import { createSlice } from '@reduxjs/toolkit';

import { dataFilters } from '../../services/data';

const initialState = {
  filterBy: dataFilters,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { id } = action.payload;

      if (id === 0) {
        const allFilters = state.filterBy.find((item) => item.id === id);
        console.log(allFilters);
        allFilters.active = !allFilters.active;

        state.filterBy.forEach((item) => {
          if (item.id !== 0) {
            item.active = allFilters.active;
          }
        });
      } else {
        const selectedFilters = state.filterBy.find((item) => item.id === id);
        selectedFilters.active = !selectedFilters.active;

        const allOtherFilters = state.filterBy
          .filter((item) => item.id !== 0)
          .every((item) => item.active);
        const allFilters = state.filterBy.find((item) => item.id === 0);
        allFilters.active = allOtherFilters;
      }
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
