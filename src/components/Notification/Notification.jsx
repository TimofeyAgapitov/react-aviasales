import React from 'react';

import Alert from '@mui/material/Alert';

export const Notification = ({ type, children }) => {
  return (
    <Alert
      variant="outlined"
      severity={type}
      style={{
        color: `${type === 'error' ? 'red' : '#2196f3'}`,
        fontSize: '1.6rem',
        alignItems: 'center',
      }}
    >
      {children}
    </Alert>
  );
};
null;
