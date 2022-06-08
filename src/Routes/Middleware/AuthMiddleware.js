import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  roles,
  ...rest
}) => {
  const { token, role } = useSelector((state) => ({ ...state.login }));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && token && roles.includes(role)) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

AuthMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AuthMiddleware;
