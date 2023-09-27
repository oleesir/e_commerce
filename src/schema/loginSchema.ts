import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Required.').email('Invalid email address.'),
  password: yup
    .string()
    .required('Required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain eight characters, uppercase, lowercase, number and special case character.',
    ),
});
