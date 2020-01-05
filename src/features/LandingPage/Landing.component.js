import React from 'react';
import { Container, Row, Button, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { bool } from 'prop-types';

import withAuth from '../../hoc/withAuth.component';
import { getAuthLoading } from '../../selectors';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';

import './Landing.scss';

const Landing = ({ isLoading }) => {
  return (
    <LoadingWrapper active={isLoading}>
      <div className="landing">
        <div className="dark-overlay text-light">
          <Container>
            <Row>
              <div className="col-md-12 text-center content">
                <h1 className="display-4 mb-4 font-weight-bold">
                  DevelopersHub
                </h1>
                <p className="lead mb-4">
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <NavLink tag={Link} className="d-inline" to="/login">
                  <Button color="success" size="lg">
                    Sign in
                  </Button>
                </NavLink>
                <NavLink tag={Link} className="d-inline" to="/register">
                  <Button size="lg">Sign up</Button>
                </NavLink>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </LoadingWrapper>
  );
};

Landing.propTypes = {
  isLoading: bool
};

const mapStateToProps = (state) => ({
  isLoading: getAuthLoading(state)
});

export default compose(connect(mapStateToProps), withRouter, withAuth)(Landing);
