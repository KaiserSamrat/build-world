import * as Yup from 'yup';

const createPassageSchema = Yup.object({
  title: Yup.string().required('This value is Required'),
  description: Yup.array().of(
    Yup.object().shape({
      passageInfo: Yup.string().required('This value is Required'),
    })
  ),
  totalQuestion: Yup.string().required('This value is Required'),
});

export { createPassageSchema };
