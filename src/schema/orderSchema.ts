import * as yup from 'yup';

export const orderSchema = yup.object({
  // cartId: yup.string().required('Required.'),
  address: yup.string().required('Required.'),
  province: yup.string().required('Required.'),
  city: yup.string().required('Required.'),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Required'),
  paymentMethod: yup.string().required('Required.'),
});
