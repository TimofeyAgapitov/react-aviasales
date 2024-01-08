import logo from '../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
