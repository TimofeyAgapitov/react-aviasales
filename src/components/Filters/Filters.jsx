import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/slices/filtersSlice';
import { dataFilters } from '../../services/data';
import Label from './UI/Label';

export const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterId) => {
    dispatch(setFilters({ id: filterId }));
  };

  return (
    <aside className="filters">
      <div className="filters__wrapper">
        <div className="filters__title">Количество пересадок</div>
        <div className="filters__content">
          {dataFilters?.map((el) => (
            <Label
              key={el.title}
              {...el}
              handleChange={() => handleFilterChange(el.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
