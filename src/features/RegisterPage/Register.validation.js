import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Too short !")
    .max(30, "Too long !")
    .required("Required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  password: yup
    .string()
    .min(
      6,
      "Password must be at least 6 characters, number and one of the special character !@#$%^&*"
    )
    // .matches(
    //   /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
    //   "Password must be at least 6 characters, number and one of the special character !@#$%^&*"
    // )
    .required("Required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required")
});
