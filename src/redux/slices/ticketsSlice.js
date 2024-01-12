import { createSlice } from '@reduxjs/toolkit';

import { fetchTickets } from '../actions/asyncActionsTickets';
import { Status } from '../../services/data';

const initialState = {
  items: [],
  status: Status.LOADING,
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
