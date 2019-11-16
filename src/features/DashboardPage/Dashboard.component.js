import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isNil, get, isEmpty } from 'lodash';
import { object, bool, func } from 'prop-types';
import { Button } from 'reactstrap';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import {
  getProfile,
  getAuthStatus,
  getAuthUser,
  getProfileError
} from '../../selectors';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';
import NoProfile from './components/NoProfile.component';
import DashboardActions from './components/DashboardActions.component';
import Alert from '../../components/Alert/Alert.component';
import Education from './components/Education.component';
import Experience from './components/Experience.component';

import './Dashboard.scss';

const Dashboard = ({
  isAuthenticated,
  getCurrentProfile,
  profile,
  user,
  error,
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  const errorMessage = get(error, 'profile', null);
  const profileData = get(profile, 'data');
  const education = get(profile, 'data.education', []);
  const experience = get(profile, 'data.experience', []);

  return (
    <div className="container custom-container m-3 mx-auto">
      <div className="text-xs-center-custom">
        <LoadingWrapper active={profile.fetching}>
          <Alert />
          <h1 className="large text-primary">Dashboard</h1>
          {!isNil(user) && (
            <p className="lead mt-3 mb-2">Welcome {user.username}</p>
          )}
          {isNil(profileData) ? (
            <NoProfile error={errorMessage} />
          ) : (
            <>
              <DashboardActions />
              {!isEmpty(education) && <Education education={education} />}
              {!isEmpty(experience) && <Experience experience={experience} />}
              <Button color="danger" onClick={() => deleteAccount()}>
                Delete Account
              </Button>
            </>
          )}
        </LoadingWrapper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state),
  profile: getProfile(state),
  user: getAuthUser(state),
  error: getProfileError(state)
});

const mapDispatchToProps = {
  getCurrentProfile,
  deleteAccount
};

Dashboard.propTypes = {
  isAuthenticated: bool,
  getCurrentProfile: func,
  profile: object,
  error: object,
  user: object,
  deleteAccount: func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
