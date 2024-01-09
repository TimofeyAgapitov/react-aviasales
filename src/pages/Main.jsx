import React from 'react';

import { Filters } from '../components/Filters';
import { Catalog } from '../components/Catalog';

const Main = () => {
  return (
    <section className="main">
      <div className="container main__container">
        <div className="main__content">
          <Filters />
          <Catalog />
        </div>
      </div>
    </section>
  );
};

export default Main;
