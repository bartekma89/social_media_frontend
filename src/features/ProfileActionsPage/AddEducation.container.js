import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { useHistory } from 'react-router-dom';

import EducationSchema from './validations/AddEducation.validation';
import EducationForm from './form/AddEducation.form';
import { addEducation } from '../../actions/profile';

const initialValuesForm = {
  school: '',
  degree: '',
  fieldofstudy: '',
  from: '',
  to: '',
  current: false,
  description: ''
};

const AddEducationContainer = ({ addEducation }) => {
  let history = useHistory();

  return (
    <div className="container my-3 custom-container">
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">Add any school or bootcamp that you have attenched</p>
      <small>* = required file</small>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={EducationSchema}
        onSubmit={(values) => addEducation(values, history)}
      >
        {(props) => <EducationForm {...props} />}
      </Formik>
    </div>
  );
};

AddEducationContainer.propTypes = {
  addEducation: func
};

const mapDispatchToProps = {
  addEducation
};

export default connect(null, mapDispatchToProps)(AddEducationContainer);
