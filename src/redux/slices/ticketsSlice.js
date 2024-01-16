import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  status: 'loading',
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload];
      state.status = 'loading';
    },
    setCompleted(state) {
      state.status = 'completed';
    },
    setError(state) {
      state.status = 'error';
    },
  },
});

export const { setTickets, setCompleted, setError } = ticketsSlice.actions;
export default ticketsSlice.reducer;
