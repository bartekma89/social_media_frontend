import * as yup from 'yup';

const AddExperienceFormSchema = yup.object().shape({
  company: yup.string().required('Required'),
  title: yup.string().required('Required'),
  location: yup.string().required('Required'),
  from: yup
    .date()
    .when(
      'to',
      (to, schema) => to && schema.max(to, `Date must be earlier then ${to}`)
    )
    .required('Required'),
  description: yup.string().required('Required'),
  current: yup.bool().notRequired(),
  to: yup.date().when('current', {
    is: (checked) => checked,
    then: yup.date().notRequired(),
    otherwise: yup.date().required('Required')
  })
});

export default AddExperienceFormSchema;
