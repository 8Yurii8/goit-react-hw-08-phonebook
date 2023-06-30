import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from './user/selectors';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../store/user/auth';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return !isAuthenticated ? children : <Navigate to="/" />;
};
