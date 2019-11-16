import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ExperienceSchema from './validations/AddExperience.validation';
import ExperienceForm from './form/AddExperience.form';
import { getAuthStatus } from '../../selectors';
import { addExperience } from '../../actions/profile';

const initialValuesForm = {
  company: '',
  title: '',
  location: '',
  from: '',
  to: '',
  current: false,
  description: ''
};

const AddExperience = ({ isAuthenticated, addExperience, history }) => {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container my-3 custom-container">
      <h1 className="large text-primary">Add Your Experience</h1>
      <p className="lead">
        Add any developer/programming positions that you have had in the past
      </p>
      <small>* = required</small>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={ExperienceSchema}
        onSubmit={(values) => addExperience(values, history)}
      >
        {(props) => <ExperienceForm {...props} />}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
});

const mapDispatchToProps = {
  addExperience
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);
