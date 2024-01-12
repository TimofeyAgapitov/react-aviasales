import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTickets } from '../../redux/actions/asyncActionsTickets';

import { Ticket } from '../Ticket';

export const Tickets = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.tickets);
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

  return (
    <ul className="tickets__list">
      {status === 'loading' && <p>Загрузка</p>}
      {status === 'error' && <p>Ошибка при загрузке</p>}
      {status === 'success' &&
        tickets.map((item, id) => <Ticket key={id} {...item} />)}
    </ul>
  );
};
