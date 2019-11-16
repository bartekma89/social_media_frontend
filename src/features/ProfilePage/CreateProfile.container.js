import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Redirect } from 'react-router-dom';

import CreateProfileForm from './form/Profile.form';
import CreateProfileFormSchema from './validations/Profile.validation';
import { createProfile } from '../../actions/profile';
import { getAuthStatus } from '../../selectors';

import './Profile.scss';

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

const CreateProfileContainer = ({
  createProfile,
  history,
  isAuthenticated
}) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container my-3 custom-container">
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        Let's get some information to make your profile stand out
      </p>
      <small>* = required file</small>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={CreateProfileFormSchema}
        onSubmit={(values) => {
          createProfile(values, history);
        }}
      >
        {(props) => <CreateProfileForm {...props} />}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
});

const mapDispatchToProps = {
  createProfile
};

CreateProfileContainer.propTypes = {
  createProfile: func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfileContainer);
