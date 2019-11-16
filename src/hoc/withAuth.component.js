import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthStatus } from '../selectors';

export default (BaseCmp) => {
  class authHoc extends Component {
    consponentDidMount() {
      const { isAuthenticated, history } = this.props;
      if (isAuthenticated) {
        history.push('/');
      }
    }

    render() {
      return <BaseCmp {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: getAuthStatus(state)
  });

  return connect(mapStateToProps)(authHoc);
};
