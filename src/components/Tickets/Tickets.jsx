import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLoadMore } from '../../redux/slices/loadSlice';

import { sorterTickets } from '../../utils/sorterTickets';

import { Ticket } from '../Ticket';
import { ProgressBar } from '../ProgressBar';
import { Notification } from '../Notification';

export const Tickets = () => {
  const dispatch = useDispatch();

  const { tickets, status } = useSelector((state) => state.tickets);

  const filterBy = useSelector((state) => state.filters.filterBy);
  const sortBy = useSelector((state) => state.sort.sortBy);
  const loadCount = useSelector((state) => state.load.loadCount);

  const sortedList = useMemo(
    () => sorterTickets(tickets, sortBy, filterBy),
    [tickets, sortBy, filterBy]
  );
  const resultList = sortedList.slice(0, loadCount).map((el, index) => {
    return <Ticket key={index} {...el} />;
  });
  const isSorted = resultList.length && status !== 'error';

  const handleShowMoreClick = () => {
    dispatch(setLoadMore(5));
  };

  return (
    <>
      <ul className="tickets__list">
        {status === 'loading' && <ProgressBar />}
        {status === 'error' && (
          <Notification type="error">Ошибка при загрузке</Notification>
        )}
        {isSorted ? (
          resultList
        ) : (
          <Notification type="info">
            Рейсов, подходящий под заданные фильтры, не найдено
          </Notification>
        )}
      </ul>
      {isSorted ? (
        <button className="tickets__more" onClick={handleShowMoreClick}>
          Показать еще 5 билетов!
        </button>
      ) : null}
    </>
  );
};
