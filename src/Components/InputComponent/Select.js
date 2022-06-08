import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function SelectInput(props) {
  const { label, name, options, defaultText, ...rest } = props;
  // console.log(`🦄 ~ file: Select.js ~ line 7 ~ SelectInput ~ props`, props)
  return (
    <div className="form-control">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <Field as="select" id={name} name={name} {...rest}>
        <option value="">Select {defaultText}</option>
        {options?.length > 0
          ? options?.map((option, idx) => (
              <option key={idx} value={option?._id}>
                {option?.courseTypeName}
              </option>
            ))
          : null}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default SelectInput;
