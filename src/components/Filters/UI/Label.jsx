import React from 'react';
import { useSelector } from 'react-redux';

const Label = ({ id, title, handleChange }) => {
  const filterBy = useSelector((state) => state.filters.filterBy);
  const isChecked = filterBy.includes(id);

  return (
    <label className="filters__label">
      <input
        type="checkbox"
        checked={isChecked}
        className="filters__checkbox"
        name="filter"
        onChange={handleChange}
      />
      <div className="filters__custom-checkbox"></div>
      <span>{title}</span>
    </label>
  );
};

export default Label;
