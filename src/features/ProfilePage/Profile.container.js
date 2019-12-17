import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { string, object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Row } from 'reactstrap';
import { get } from 'lodash';

import { getProfileById } from '../../actions/profile';
import { getProfile, getAuth } from '../../selectors';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';
import ProfileCard from './components/ProfileCard.component';
import ProfileEducation from './components/ProfileEducation.component';
import ProfileExperience from './components/ProfileExperience.component';
import ProfileGitHub from './components/ProfileGitHub.component';
import ProfileBio from './components/ProfileBio.component';
import ProfileSkills from './components/ProfileSkills.component';

import './ProfilePage.scss';

const ProfileContainer = ({
  match: {
    params: { id }
  },
  getProfileById,
  profile,
  auth
}) => {
  useEffect(() => {
    getProfileById(id);
  }, [id, getProfileById]);

  const { isAuthenticated, loading: authFetching } = auth;
  const profileId = get(profile, 'data.user._id');
  const authId = get(auth, 'user._id');
  const profileData = get(profile, 'data');
  const education = get(profile, 'data.education', []);
  const experience = get(profile, 'data.experience', []);
  const githubUsername = get(profile, 'data.githubusername', null);
  const bio = get(profile, 'data.bio');
  const skills = get(profile, 'data.skills', []);

  return (
    <LoadingWrapper active={get(profile, 'fetching')}>
      <div className="container mb-4">
        <div className="d-inline-block">
          <Link to="/profiles">
            <Button className="mr-1" color="info">
              Back to Profiles
            </Button>
          </Link>
          {isAuthenticated && authFetching === false && profileId === authId && (
            <Link to="/edit-profile">
              <Button className="ml-1" color="secondary">
                Edit Profile
              </Button>
            </Link>
          )}
        </div>
        <ProfileCard profile={profileData} />
        <ProfileBio bio={bio} />
        <ProfileSkills skills={skills} />
        <Row>
          <ProfileEducation education={education} />
          <ProfileExperience experience={experience} />
        </Row>
        <ProfileGitHub githubUsername={githubUsername} />
      </div>
    </LoadingWrapper>
  );
};

ProfileContainer.propTypes = {
  id: string,
  getProfileById: func,
  getProfile: object
};

const mapStateToProps = (state) => ({
  profile: getProfile(state),
  auth: getAuth(state)
});

const mapDisptachToProps = {
  getProfileById
};

export default connect(mapStateToProps, mapDisptachToProps)(ProfileContainer);
