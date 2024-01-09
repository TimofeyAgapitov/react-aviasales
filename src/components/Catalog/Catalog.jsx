import { Sorting } from '../Sorting';
import { Tickets } from '../Tickets';

export const Catalog = () => {
  return (
    <section className="catalog">
      <Sorting />
      <Tickets />
      <button className="catalog__btn">Показать еще 5 билетов!</button>
    </section>
  );
};

