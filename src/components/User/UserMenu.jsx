import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/user/user';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

export const UserMenu = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

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
        }}
      >
        {currentUser ? currentUser.user.email : ''}
      </Skeleton>

      <Button
        style={{ marginTop: '10px' }}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        size="small"
      >
        Logout
      </Button>
    </div>
  );
};
