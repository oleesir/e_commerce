import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Required.').email('Invalid email address.'),
  password: yup.string().required('Required.'),
});
