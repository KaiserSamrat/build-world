import * as Yup from 'yup';

const createPackageSchema = Yup.object({
  packageName: Yup.string().required('This value is Required'),
  priceType: Yup.string().required('This value is Required'),
  price: Yup.string().when('priceType', {
    is: 'paid',
    then: Yup.string().required('This value is Required'),
  }),
  discount: Yup.string().required('This value is Required'),
  eligible: Yup.string().required('This value is Required'),
  courseType: Yup.string().required('This value is Required'),
  expire: Yup.string().required('This value is Required'),
  content: Yup.string().required('This value is Required'),
  description: Yup.string().required('This value is Required'),
  tags: Yup.array()
    .of(Yup.string().required('This value is Required'))
    .required('This value is Required'),
  packageService: Yup.array()
    .of(Yup.string().required('This value is Required'))
    .required('This value is Required'),
  validity: Yup.string().required('This value is Required'),
});

export { createPackageSchema };
