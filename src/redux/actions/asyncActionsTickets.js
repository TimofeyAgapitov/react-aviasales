import axios from 'axios';
import { setTickets, setCompleted, setError } from '../slices/ticketsSlice';

export const fetchTickets = () => async (dispatch) => {
  try {
    const { data: searchResponse } = await axios.get(
      'https://aviasales-test-api.kata.academy/search'
    );
    const searchId = searchResponse.searchId;

    let ticketsResponse;

    do {
      try {
        ticketsResponse = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        );
        const tickets = ticketsResponse.data.tickets;

        if (tickets === undefined) {
          dispatch(setError());
          break;
        }

        dispatch(setTickets(tickets));
      } catch (error) {
        const statusCode = error.response?.status;

        if (statusCode && statusCode < 500) {
          dispatch(setError());
          break;
        }
      }
    } while (!ticketsResponse.data.stop);

    dispatch(setCompleted());
  } catch (error) {
    console.error('Ошибка при получении билетов:', error);
    dispatch(setError());
  }
};
