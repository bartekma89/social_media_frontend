import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { compose } from "redux";
import { func } from "prop-types";

import withAuth from "../../hoc/withAuth.component";
import { SigninSchema } from "./Login.validation";
import Login from "./Login.component";
import { signin } from "../../actions/auth";

import "./Login.scss";

const initialValuesForm = {
  email: "",
  password: ""
};

const LoginContainer = ({ signin, history }) => {
  return (
    <div className="container custom-container my-4">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Log In</h1>
          <p className="lead text-center">
            Sign in to your Social Networ Dev account
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValuesForm}
        validationSchema={SigninSchema}
        onSubmit={(values, actions) => {
          const { email, password } = values;

          const login = {
            email,
            password
          };

          signin(login, actions, () => {
            history.push("/dashboard");
          });
        }}
      >
        {props => <Login {...props} />}
      </Formik>
    </div>
  );
};

LoginContainer.propTypes = {
  signin: func
};

const mapDispatchToProps = {
  signin
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withAuth
)(LoginContainer);
