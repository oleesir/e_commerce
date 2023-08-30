import * as yup from 'yup';

export const orderSchema = yup.object({
  address: yup.string().required('Required.'),
  province: yup.string().required('Required.'),
  city: yup.string().required('Required.'),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Not a valid phone number')
    .required('Required'),
});
