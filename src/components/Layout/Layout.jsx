import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

function Layout({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {children}
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
