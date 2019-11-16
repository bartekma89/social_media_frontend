import React, { useState } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { isEmpty } from "lodash";
import { func, object, bool } from "prop-types";

import "./Register.scss";
//TODO change filed components for reactstrap
const Register = ({
  errors,
  touched,
  dirty,
  isSubmitting,
  handleReset,
  values
}) => {
  const [isHide, setIsHide] = useState(true);

  const toggleIsHide = () => {
    setIsHide(!isHide);
  };

  const showPassword = dirty && !isEmpty(values.password);

  return (
    <Form>
      <label htmlFor="username">Username</label>
      <Field
        className={
          errors.username && touched.username
            ? "text-input error"
            : "text-input"
        }
        type="text"
        name="username"
        placeholder="Enter your username"
        disabled={isSubmitting}
      />
      <ErrorMessage
        className="input-feedback"
        name="username"
        component="div"
      />
      <label htmlFor="email">Email</label>
      <Field
        className={
          errors.email && touched.email ? "text-input error" : "text-input"
        }
        type="text"
        name="email"
        placeholder="Enter your email"
        disabled={isSubmitting}
      />
      <ErrorMessage className="input-feedback" name="email" component="div" />
      <label htmlFor={isHide ? "password" : "text"}>Password</label>
      <div className="password__input">
        <Field
          className={
            errors.password && touched.password
              ? "text-input error"
              : "text-input"
          }
          type={isHide ? "password" : "text"}
          name="password"
          placeholder="Enter your password"
          disabled={isSubmitting}
        />
        {showPassword && (
          <span className="password__show" onClick={toggleIsHide}>
            {isHide ? "Show" : "Hide"}
          </span>
        )}
      </div>
      <ErrorMessage
        className="input-feedback"
        name="password"
        component="div"
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <Field
        className={
          errors.passwordConfirmation && touched.passwordConfirmation
            ? "text-input error"
            : "text-input"
        }
        type={isHide ? "password" : "text"}
        name="passwordConfirmation"
        placeholder="Confirm password"
        disabled={isSubmitting}
      />
      <ErrorMessage
        className="input-feedback"
        name="passwordConfirmation"
        component="div"
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
    </Form>
  );
};

Register.propType = {
  errors: object,
  touched: object,
  dirty: bool,
  isSubmitting: bool,
  handleReset: func,
  values: object
};

export default Register;
