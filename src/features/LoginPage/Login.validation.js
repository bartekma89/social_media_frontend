import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
  password: yup.string().required("Required")
});
