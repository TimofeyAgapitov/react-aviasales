import React from 'react';
import ReactDOM from 'react-dom';

export const Modals = () => {
  const modalRootEl = document.getElementById('modalRoot');

  return ReactDOM.createPortal(children, modalRootEl);
};
