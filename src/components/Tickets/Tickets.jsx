import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTickets } from '../../redux/actions/asyncActionsTickets';

import { setNext } from '../../redux/slices/loadSlice';

import { Ticket } from '../Ticket';
import { Spiner } from '../Spiner';

export const Tickets = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.tickets);
  const loading = useSelector((state) => state.load.count);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchTickets());
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (items.tickets) setTickets(items.tickets);
  }, [items]);

  const handleShowMoreClick = () => {
    dispatch(setNext(5));
  };

  return (
    <>
      <ul className="tickets__list">
        {status === 'loading' && <Spiner />}
        {status === 'error' && <p>Ошибка при загрузке</p>}
        {status === 'success' &&
          tickets
            ?.slice(0, loading)
            .map((item, id) => <Ticket key={id} {...item} />)}
      </ul>
      <button className="tickets__more" onClick={handleShowMoreClick}>
        Показать еще 5 билетов!
      </button>
    </>
  );
};
