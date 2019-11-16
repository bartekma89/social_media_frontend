import * as yup from "yup";

const AddEducationFormSchema = yup.object().shape({
  school: yup.string().required("Required"),
  degree: yup.string().required("Required"),
  fieldofstudy: yup.string().required("Required"),
  from: yup
    .date()
    .when(
      "to",
      (to, schema) => to && schema.max(to, `Date must be earlier then ${to}`)
    )
    .required("Required"),
  description: yup.string().required("Required"),
  current: yup.bool().notRequired(),
  to: yup.date().when("current", {
    is: checked => checked,
    then: yup.date().notRequired(),
    otherwise: yup.date().required("Required")
  })
});

export default AddEducationFormSchema;
