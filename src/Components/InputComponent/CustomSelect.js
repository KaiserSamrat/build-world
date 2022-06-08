import { toCapitalize } from "helpers/Custom/toCapitalize"
import React from "react"
import Select from "react-select"

export const SelectField = ({
  field,
  form,
  options,
  isMulti,
  customOnChange,
  value,
  nameData,
  ...props
}) => {
  const customOnChangeFn = (customFunction, option) => {
    customFunction(option)
  }
  const onChange = option => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map(item => item[value]) : option[value]
    )
    if (customOnChange !== undefined) {
      customOnChangeFn(customOnChange, option)
    }
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option[value]) >= 0)
        : options.find(option => option[value] === field.value)
    } else {
      return isMulti ? [] : ""
    }
  }

  return (
    <Select
      {...props}
      name={field.name}
      value={getValue()}
      getOptionLabel={e => toCapitalize(e[nameData])}
      getOptionValue={e => e[value]}
      onChange={onChange}
      options={options}
      isMulti={isMulti}
    />
  )
}

export default SelectField
