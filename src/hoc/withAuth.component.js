import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthStatus } from '../selectors';
import LoadingWrapper from '../components/LoadingWrapper/LoadingWrapper.component';

export default (BaseCmp) => {
  class authHoc extends Component {
    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    checkAndRedirect() {
      const { isAuthenticated, history } = this.props;
      if (isAuthenticated) {
        history.push('/dashboard');
      }
    }

    render() {
      const { isLoading, isAuthenticated } = this.props;
      return (
        <LoadingWrapper active={isLoading}>
          {!isAuthenticated ? <BaseCmp {...this.props} /> : null}
        </LoadingWrapper>
      );
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getAuthStatus(state)
  });

  return connect(mapStateToProps)(authHoc);
};
