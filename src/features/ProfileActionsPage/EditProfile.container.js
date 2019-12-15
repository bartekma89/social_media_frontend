import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { isNil, get } from 'lodash';
import { bool, func, object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import EditProfileFormSchema from './validations/Profile.validation';
import EditProfileForm from './form/Profile.form';
import { getAuthStatus, getProfile } from '../../selectors';
import { getCurrentProfile, createProfile } from '../../actions/profile';

const initialValuesForm = {
  handle: '',
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  bio: '',
  githubusername: '',
  youtube: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  instagram: ''
};

const EditProfileContainer = ({
  profile: { fetching, data },
  isAuthenticated,
  getCurrentProfile,
  createProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialValuesForm);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    setFormData({
      handle: fetching || isNil(get(data, 'handle')) ? '' : get(data, 'handle'),
      company:
        fetching || isNil(get(data, 'company')) ? '' : get(data, 'company'),
      website:
        fetching || isNil(get(data, 'website')) ? '' : get(data, 'website'),
      location:
        fetching || isNil(get(data, 'location')) ? '' : get(data, 'location'),
      status: fetching || isNil(get(data, 'status')) ? '' : get(data, 'status'),
      skills: fetching || isNil(get(data, 'skills')) ? '' : get(data, 'skills'),
      bio: fetching || isNil(get(data, 'bio')) ? '' : get(data, 'bio'),
      githubusername:
        fetching || isNil(get(data, 'githubusername'))
          ? ''
          : get(data, 'githubusername'),
      youtube:
        fetching || isNil(get(data, 'social.youtube'))
          ? ''
          : get(data, 'social.youtube'),
      twitter:
        fetching || isNil(get(data, 'social.twitter'))
          ? ''
          : get(data, 'social.twitter'),
      facebook:
        fetching || isNil(get(data, 'social.facebook'))
          ? ''
          : get(data, 'social.facebook'),
      linkedin:
        fetching || isNil(get(data, 'social.linkedin'))
          ? ''
          : get(data, 'social.linkedin'),
      instagram:
        fetching || isNil(get(data, 'social.instagram'))
          ? ''
          : get(data, 'social.instagram')
    });
  }, [data, fetching]);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container my-3 custom-container">
      <h1 className="large text-primary">Edit Your Profile</h1>
      <p>Update your profile</p>
      <small>* = required file</small>
      <Formik
        enableReinitialize={true}
        initialValues={formData}
        validationSchema={EditProfileFormSchema}
        onSubmit={(values) => createProfile(values, history, true)}
      >
        {(props) => <EditProfileForm {...props} history={history} />}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state),
  profile: getProfile(state)
});

const mapDispatchToProps = {
  getCurrentProfile,
  createProfile
};

EditProfileContainer.propTypes = {
  fetching: bool,
  data: object,
  isAuthenticated: bool,
  getCurrentProfile: func,
  createProfile: func,
  history: object
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(EditProfileContainer);
