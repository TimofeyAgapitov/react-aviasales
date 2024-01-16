import SortingBtn from './UI/SortingBtn';

import { dataSorting } from '../../services/data.js';

export const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__list">
        {dataSorting?.map((el, index) => (
          <SortingBtn key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
};
