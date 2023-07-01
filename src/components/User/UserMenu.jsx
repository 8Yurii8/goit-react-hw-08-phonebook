import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

export const UserMenu = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  let email = '';
  if (currentUser) {
    if (currentUser.email) {
      email = currentUser.email;
    } else if (currentUser.user && currentUser.user.email) {
      email = currentUser.user.email;
    }
  }

  return (
    <div>
      <Skeleton
        variant="rounded"
        width={210}
        height={20}
        style={{
          textAlign: 'center',
          backgroundColor: '#1976d2',
          color: '#fff',
          marginTop: '10px',
        }}
      >
        {email}
      </Skeleton>
    </div>
  );
};
