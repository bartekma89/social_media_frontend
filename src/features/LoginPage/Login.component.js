import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { object, bool } from "prop-types";

//TODO Change field component for reactstraps

const Login = ({ errors, touched, isSubmitting }) => {
  return (
    <Form>
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
      <label htmlFor={"password"}>Password</label>
      <Field
        className={
          errors.password && touched.password
            ? "text-input error"
            : "text-input"
        }
        type={"password"}
        name="password"
        placeholder="Enter your password"
        disabled={isSubmitting}
      />
      <ErrorMessage
        className="input-feedback"
        name="password"
        component="div"
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

Login.propTypes = {
  errors: object,
  touched: object,
  isSubmitting: bool
};

export default Login;
