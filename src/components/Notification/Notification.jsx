import React from 'react';

import Alert from '@mui/material/Alert';

export const Notification = ({ type, children }) => {
  return (
    <Alert
      variant="outlined"
      severity={type}
      style={{
        fontSize: '1.8rem',
        color: `${type === 'error' ? 'red' : '#2196f3'}`,
      }}
    >
      {children}
    </Alert>
  );
};
null;
