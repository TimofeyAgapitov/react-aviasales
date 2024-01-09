import Label from './UI/Label';

import { dataFilters } from '../../services/data';

export const Filters = () => {
  return (
    <aside className="filters">
      <div className="filters__wrapper">
        <div className="filters__title">Количество пересадок</div>
        <div className="filters__content">
          {dataFilters.map((item, index) => (
            <Label key={item.title} title={item.title} />
          ))}
        </div>
      </div>
    </aside>
  );
};

