import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';

export const UserMenu = () => {
  const currentUser = useSelector(state => state.user.currentUser);

  console.log(currentUser);

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
        {currentUser ? currentUser.email : ''}
      </Skeleton>
    </div>
  );
};
