import * as Yup from "yup";

const addressSchema = Yup.object({
  street: Yup.string()
    .required('Required'),
  zipcode: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
});

const companySchema = Yup.object({
  name: Yup.string()
    .required('Required'),
});

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  address: Yup.object().shape({
    street: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
    zipcode: Yup.string()
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
  }),
  phone: Yup.string()
    .min(10, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  website: Yup.string()
    .required('Required')
});