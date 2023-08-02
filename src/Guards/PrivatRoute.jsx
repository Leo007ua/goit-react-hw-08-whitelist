import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getisRefreshing } from 'redux/auth/authSelectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getisRefreshing);
  return !IsLoggedIn & !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string
};
export default PrivateRoute;
