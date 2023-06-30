import React from 'react';
import { UserMenu } from './User/UserMenu';

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'store/user/selectors';
const Home = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      {isAuthenticated && <UserMenu />}
      <div style={{ paddingLeft: '100px', paddingTop: '100px' }}>
        <h1>CONTACTS BOOK</h1>
      </div>
    </>
  );
};

export default Home;
