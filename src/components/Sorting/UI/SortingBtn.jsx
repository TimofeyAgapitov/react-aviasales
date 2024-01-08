import React from 'react';

const SortingBtn = ({ title }) => {
  return (
    <button className="sorting__btn" type="button">
      {title}
    </button>
  );
};

export default SortingBtn;
