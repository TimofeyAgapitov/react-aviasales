import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSortBy } from '../../../redux/slices/sortSlice';

const SortingBtn = ({ title, value }) => {
  const dispatch = useDispatch();

  let isActive = useSelector((state) => state.sort.sortBy);
  let classes = isActive === value ? 'sorting__btn active' : 'sorting__btn';

  return (
    <button
      className={classes}
      type="button"
      onClick={() => dispatch(setSortBy(value))}
    >
      {title}
    </button>
  );
};

export default SortingBtn;
