import * as yup from "yup";

const ProfileFormSchema = yup.object().shape({
  status: yup.string().required("Required"),
  handle: yup.string().required("Required"),
  skills: yup.string().required("Required"),
  website: yup.string().url("URL is invalid"),
  twitter: yup.string().url("URL is invalid"),
  youtube: yup.string().url("URL is invalid"),
  facebook: yup.string().url("URL is invalid"),
  linkedin: yup.string().url("URL is invalid"),
  instagram: yup.string().url("URL is invalid")
});

export default ProfileFormSchema;
