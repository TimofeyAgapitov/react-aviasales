import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header';

import Main from './pages/Main';
// import Orders from './pages/Orders';
// import Favourites from './pages/Favourites';

import { fetchTickets }from './redux/actions/asyncActionsTickets';

export const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <>
      <Header />

      <Main />
    </>
  );
};
