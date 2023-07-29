import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Email is required.').email('Invalid email address.'),
  password: yup
    .string()
    .required('Please enter your password.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters,Uppercase, Lowercase,Number and Special Case Character.',
    ),
});
