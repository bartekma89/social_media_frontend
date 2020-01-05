import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { func, object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import withAuth from '../../hoc/withAuth.component';
import { SignupSchema } from './Register.validation';
import Register from './Register.component';
import { signup } from '../../actions/auth';

import './Register.scss';

const initialValuesForm = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const RegisterContainer = ({ signup, history }) => {
  return (
    <div className="container py-1 custom-container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">
            Join to us and create account on DevelopersHub
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          const { username, email, password, passwordConfirmation } = values;

          const newUser = {
            username,
            email,
            password,
            passwordConfirmation
          };

          signup(newUser, actions, () => {
            history.push('/dashboard');
          });
        }}
      >
        {(props) => <Register {...props} />}
      </Formik>
      <p className="my-3">
        Alredy have an account ? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

RegisterContainer.propTypes = {
  signup: func,
  history: object
};

const mapDispatchToProps = {
  signup
};

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
  withAuth
)(RegisterContainer);
