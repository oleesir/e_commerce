import * as yup from 'yup';

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .test('len', 'Name must be longer than or equal to 2 characters', (val: any) => val.length >= 2)
    .matches(/^[aA-zZ\s]+$/, 'Input letters only.')
    .required('Required.'),
  lastName: yup
    .string()
    .test('len', 'Name must be longer than or equal to 2 characters', (val: any) => val.length >= 2)
    .matches(/^[aA-zZ\s]+$/, 'Input letters only.')
    .required('Required.'),
  email: yup.string().required('Email is required.').email('Invalid email address.'),
  password: yup
    .string()
    .required('Please enter your password.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters,Uppercase, Lowercase,Number and Special Case Character.',
    ),
});
