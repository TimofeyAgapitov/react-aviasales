import InfoItem from './InfoItem';

const Info = (props) => {
  return (
    <ul className="ticket__info">
      <InfoItem data={props.segments[0]} />
      <InfoItem data={props.segments[1]} />
    </ul>
  );
};

export default Info;
