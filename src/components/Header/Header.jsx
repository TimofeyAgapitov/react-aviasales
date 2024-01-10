import { Toggle } from './UI/Toggle';

import logo from '../../assets/icons/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logotype">
          <div className="header__logotype-icon">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="header__controls">
          <Toggle />
          <button className="header__login">Войти</button>
        </div>
      </div>
    </header>
  );
};
