import React from 'react';
import { Field,ErrorMessage } from 'formik';
import TextError from './TextError';
function Input(props) {
    const {label,name,className,...rest}=props
  return (
    <div>
      <label htmlFor={name} className={className}>{label}</label>
      <Field id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input
