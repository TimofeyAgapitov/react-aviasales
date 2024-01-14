import { useDispatch } from 'react-redux';

import { setFilters } from '../../redux/slices/filtersSlice';
import { dataFilters } from '../../services/data';

import Label from './UI/Label';

export const Filters = () => {
  const dispatch = useDispatch();

  const handleClick = (item) => dispatch(setFilters(item));

  return (
    <aside className="filters">
      <div className="filters__wrapper">
        <div className="filters__title">Количество пересадок</div>
        <div className="filters__content">
          {dataFilters?.map((item, index) => (
            <Label
              key={item.title}
              title={item.title}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
