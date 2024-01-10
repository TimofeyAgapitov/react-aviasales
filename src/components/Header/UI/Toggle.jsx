import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '../../../redux/slices/themeSlice';

import moon from '../../../assets/icons/moon.svg';
import sun from '../../../assets/icons/sun.svg';

export const Toggle = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector((store) => store.theme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = activeTheme;
    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  const handleClick = () => {
    const next = activeTheme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(next));
  };

  return (
    <button className="header__theme" onClick={handleClick}>
      <img src={activeTheme == 'dark' ? moon : sun} alt="" />
    </button>
  );
};
