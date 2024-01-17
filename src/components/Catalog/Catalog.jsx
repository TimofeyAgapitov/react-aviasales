import { Sorting } from '../Sorting';
import { Tickets } from '../Tickets';

import { BackToTop } from '../BackToTop/BackToTop';

export const Catalog = () => {
  return (
    <section className="catalog">
      <Sorting />
      <Tickets />
      <BackToTop />
    </section>
  );
};
