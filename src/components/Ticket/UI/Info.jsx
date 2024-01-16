import InfoItem from './InfoItem';

const Info = ({ segments }) => {
  return (
    <ul className="ticket__info">
      {segments?.map((el, id) => (
        <InfoItem key={id} {...el} />
      ))}
    </ul>
  );
};

export default Info;
