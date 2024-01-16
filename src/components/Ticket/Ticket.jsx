import { formatCurrency } from '../../utils/formationCurrency';

import Info from './UI/Info';

export const Ticket = (props) => {
  const { price, carrier } = props;

  return (
    <li className="ticket">
      <div className="ticket__wrapper">
        <div className="ticket__header">
          <div className="ticket__price">{formatCurrency(price)}</div>
          <div className="ticket__logo">
            <img
              src={`https://pics.avs.io/99/36/${carrier}.svg`}
              alt=""
            />
          </div>
        </div>
        <Info {...props} />
      </div>
    </li>
  );
};
