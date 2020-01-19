import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isNil, get } from 'lodash';
import { bool, func, object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import EditProfileFormSchema from './validations/Profile.validation';
import EditProfileForm from './form/Profile.form';
import { getProfile } from '../../selectors';
import { getCurrentProfile, createProfile } from '../../actions/profile';
import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';

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
  profile: { intact, fetching, data },
  getCurrentProfile,
  createProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialValuesForm);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    const hasData = (name) => intact || fetching || isNil(get(data, name));
    setFormData({
      handle: hasData('handle') ? '' : get(data, 'handle'),
      company: hasData('company') ? '' : get(data, 'company'),
      website: hasData('website') ? '' : get(data, 'website'),
      location: hasData('location') ? '' : get(data, 'location'),
      status: hasData('status') ? '' : get(data, 'status'),
      skills: hasData('skills') ? '' : get(data, 'skills'),
      bio: hasData('bio') ? '' : get(data, 'bio'),
      githubusername: hasData('githubusername')
        ? ''
        : get(data, 'githubusername'),
      youtube: hasData('social.youtube') ? '' : get(data, 'social.youtube'),
      twitter: hasData('social.twitter') ? '' : get(data, 'social.twitter'),
      facebook: hasData('social.facebook') ? '' : get(data, 'social.facebook'),
      linkedin: hasData('social.linkedin') ? '' : get(data, 'social.linkedin'),
      instagram: hasData('social.instagram')
        ? ''
        : get(data, 'social.instagram')
    });
  }, [data, fetching, intact]);

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
        {(props) => (
          <LoadingWrapper active={intact || fetching}>
            <EditProfileForm {...props} history={history} />
          </LoadingWrapper>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: getProfile(state)
});

const mapDispatchToProps = {
  getCurrentProfile,
  createProfile
};

EditProfileContainer.propTypes = {
  fetching: bool,
  data: object,
  getCurrentProfile: func,
  createProfile: func,
  history: object
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(EditProfileContainer);
