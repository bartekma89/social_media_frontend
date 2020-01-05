import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAuth } from '../../selectors';
import LoadingWrapper from '../LoadingWrapper/LoadingWrapper.component';

const PrivateRoute = ({ children, auth, ...rest }) => {
  const { loading, isAuthenticated } = auth;

  return (
    <LoadingWrapper active={loading}>
      <Route
        {...rest}
        render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
      />
    </LoadingWrapper>
  );
};

const mapStateToProps = (state) => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);
