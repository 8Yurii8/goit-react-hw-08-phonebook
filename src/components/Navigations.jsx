import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsAuthenticated } from '../store/user/selectors';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/user/auth';

const Navigation = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (isAuthenticated) {
    return (
      <div>
        {location.pathname !== '/' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}
            style={{ marginRight: '10px' }}
          >
            Home
          </Button>
        )}
        {location.pathname !== '/contacts' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/contacts')}
            style={{ marginRight: '10px' }}
          >
            Contacts
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    );
  } else {
    if (location.pathname === '/contacts') {
      return <Navigate to="/login" />;
    }

    return (
      <nav>
        {location.pathname !== '/' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}
            style={{ marginRight: '10px' }}
          >
            Home
          </Button>
        )}
        {location.pathname !== '/register' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/register')}
            style={{ marginRight: '10px' }}
          >
            Register
          </Button>
        )}
        {location.pathname !== '/login' && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/login')}
            style={{ marginRight: '10px' }}
          >
            Login
          </Button>
        )}
      </nav>
    );
  }
};

export default Navigation;
