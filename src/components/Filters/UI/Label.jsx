const Label = ({ title }) => {
  return (
    <label className="filters__label">
      <input type="checkbox" className="filters__checkbox" name="filter" />
      <div className="filters__custom-checkbox"></div>
      <span>{title}</span>
    </label>
  );
};

export default Label;
