import * as yup from 'yup';

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .required('Required.')
    .test(
      'len',
      'Name must be more than or equal to two characters.',
      (val: any) => val.length >= 2,
    )
    .matches(/^[aA-zZ\s]+$/, 'Input letters only.'),
  lastName: yup
    .string()
    .required('Required.')
    .test(
      'len',
      'Name must be more than or equal to two characters.',
      (val: any) => val.length >= 2,
    )
    .matches(/^[aA-zZ\s]+$/, 'Input letters only.'),
  email: yup.string().required('Required.').email('Invalid email address.'),
  password: yup
    .string()
    .required('Required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain eight characters, uppercase, lowercase, number and special case character.',
    ),
});
