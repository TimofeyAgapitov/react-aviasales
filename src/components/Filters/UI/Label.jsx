const Label = ({ title, onClick }) => {
  return (
    <label className="filters__label" onClick={onClick}>
      <input type="checkbox" className="filters__checkbox" name="filter" />
      <div className="filters__custom-checkbox"></div>
      <span>{title}</span>
    </label>
  );
};

export default Label;
