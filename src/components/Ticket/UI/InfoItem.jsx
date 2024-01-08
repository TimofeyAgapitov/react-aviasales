const InfoItem = () => {
  return (
    <li className="ticket__wrap">
      <div className="ticket__item">
        <span>MOW – HKT</span>
        <strong>10:45 – 08:00</strong>
      </div>
      <div className="ticket__item">
        <span>В пути</span>
        <strong>21ч 15м</strong>
      </div>
      <div className="ticket__item">
        <span>2 пересадки</span>
        <strong>HKG, JNB</strong>
      </div>
    </li>
  );
};

export default InfoItem;
