import './Main';

import Sorting from '../Sorting/Sorting';
import Tickets from '../Tickets/Tickets';

const Main = () => {
  return (
    <section className="content">
      <Sorting />
      <Tickets />
      <button className="more">Показать еще 5 билетов!</button>
    </section>
  );
};

export default Main;
