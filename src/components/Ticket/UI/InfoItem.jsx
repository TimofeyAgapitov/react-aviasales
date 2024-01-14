import { formatMinutesToHoursAndMinutes } from '../../../utils/formationDuration';
import { calculateArrivalTime } from '../../../utils/formationTime';

const InfoItem = ({ data }) => {
  return (
    <li className="ticket__wrap">
      <div className="ticket__item">
        <span>
          {data.origin} – {data.destination}
        </span>
        <strong>{calculateArrivalTime(data.date, data.duration)}</strong>
      </div>
      <div className="ticket__item">
        <span>В пути</span>
        <strong>{formatMinutesToHoursAndMinutes(data.duration)}</strong>
      </div>
      <div className="ticket__item">
        <span>
          {data.stops.length === 0
            ? 'без пересадок'
            : `${data.stops.length} пересадки`}
        </span>
        <strong>{data.stops.join(', ')}</strong>
      </div>
    </li>
  );
};

export default InfoItem;
