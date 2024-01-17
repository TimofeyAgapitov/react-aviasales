import React, { useState, useEffect } from 'react';

import arrow from '../../assets/icons/arrow.svg';

export const BackToTop = () => {
  const [visiable, setVisiable] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setVisiable(true) : setVisiable(false);
    });
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visiable && (
        <button className="scroll" onClick={handleScrollUp}>
          <img className="scroll__icon" src={arrow} alt="" />
        </button>
      )}
    </>
  );
};
