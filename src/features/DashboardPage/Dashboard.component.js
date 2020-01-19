import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isNil, get, isEmpty, orderBy } from 'lodash';
import { object, func, bool } from 'prop-types';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import {
  getProfile,
  getAuthUser,
  getProfileError,
  getProfileRehydratedStatus
} from '../../selectors';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';
import NoProfile from './components/NoProfile.component';
import DashboardActions from './components/DashboardActions.component';
import Alert from '../../components/Alert/Alert.component';
import Education from './components/Education.component';
import Experience from './components/Experience.component';
import ProfileDelete from './components/ProfileDelete.component';

import './Dashboard.scss';

const Dashboard = ({
  getCurrentProfile,
  profile,
  user,
  error,
  deleteAccount,
  profileRehydratedStatus
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const errorMessage = get(error, 'profile', null);
  const profileData = get(profile, 'data');
  const education = get(profile, 'data.education', []);
  const experience = get(profile, 'data.experience', []);
  const educationOrderByTo = orderBy(education, ['to'], ['desc']);
  const experienceOrderByTo = orderBy(experience, ['to'], ['desc']);

  const { fetching, intact } = profile;

  return (
    <div className="container custom-container m-3 mx-auto">
      <div className="text-xs-center-custom">
        <Alert />
        <h1 className="large text-primary">Dashboard</h1>
        {!isNil(user) && (
          <p className="lead mt-3 mb-2">Welcome {get(user, 'username')}</p>
        )}
        {profileRehydratedStatus && (
          <LoadingWrapper active={intact || fetching}>
            {isNil(profileData) ? (
              <NoProfile error={errorMessage} />
            ) : (
              <>
                <DashboardActions />
                {!isEmpty(education) && (
                  <Education education={educationOrderByTo} />
                )}
                {!isEmpty(experience) && (
                  <Experience experience={experienceOrderByTo} />
                )}
                <ProfileDelete
                  userName={get(user, 'username')}
                  handleDeleteProfile={deleteAccount}
                />
              </>
            )}
          </LoadingWrapper>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  user: getAuthUser(state),
  error: getProfileError(state),
  profileRehydratedStatus: getProfileRehydratedStatus(state)
});

const mapDispatchToProps = {
  getCurrentProfile,
  deleteAccount
};

Dashboard.propTypes = {
  getCurrentProfile: func,
  profile: object,
  error: object,
  user: object,
  deleteAccount: func,
  profileRehydratedStatus: bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
