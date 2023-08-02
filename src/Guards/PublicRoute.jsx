import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  return IsLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string
};
export default PublicRoute;
