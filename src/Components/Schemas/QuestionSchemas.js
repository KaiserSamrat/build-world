import * as Yup from 'yup';

const multipleQuesSchema = Yup.object({
  q: Yup.string().required('This value is Required'),
  opt: Yup.array()
    .of(Yup.string().required('This value is Required'))
    .required('This value is Required'),
  answer: Yup.array()
    .of(Yup.string().required('This value is Required'))
    // .oneOf([Yup.ref("opt")], "Answer is not matched with options")
    .required('This value is Required'),
  explanation: Yup.string().required('This value is Required'),
});

export { multipleQuesSchema };
