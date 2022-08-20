import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';
function Select(props) {
    const {label,name,options,className,...rest} = props
  return (
    <div>
        <label htmlFor={name} className={className}>{label}</label>
        <Field as='select' id={name} name={name} {...rest}>
            {
                options.map(option=>{
                    return(
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select