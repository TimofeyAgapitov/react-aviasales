import { formatMinutesToHoursAndMinutes } from '../../../utils/formationDuration';
import { calculateArrivalTime } from '../../../utils/formationTime';

const InfoItem = ({ origin, destination, date, duration, stops }) => {
  return (
    <li className="ticket__wrap">
      <div className="ticket__item">
        <span>
          {origin} – {destination}
        </span>
        <strong>{calculateArrivalTime(date, duration)}</strong>
      </div>
      <div className="ticket__item">
        <span>В пути</span>
        <strong>{formatMinutesToHoursAndMinutes(duration)}</strong>
      </div>
      <div className="ticket__item">
        <span>
          {stops.length === 0 ? 'без пересадок' : `${stops.length} пересадки`}
        </span>
        <strong>{stops.join(', ')}</strong>
      </div>
    </li>
  );
};

export default InfoItem;
