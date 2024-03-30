import React from 'react';

import { ErrorMessage } from '@hookform/error-message';
import { cx, cva } from 'class-variance-authority';
const _ = require('lodash');

const inputClassName = cva(
  [
    "h-64px w-full",
    "px-20px",
    "bg-gray-100",
    "rounded-20px border border-ui-gray-200",
    "font-medium text-lg leading-lg text-ui-gray-950",
    "focus:outline-none"
  ],
  {
    variants: {
      errors: {
        true: 'border-ui-red-1'
      }
    }
  }
);

const errorClassName = cx(  
  'relative box-border',
  'max-h-0',
  'text-base leading-base text-ui-red-1',
  'pt-4px max-h-24px opacity-100'
);

const InputElement = ({ className, type, name, id, placeholder, register, validateOptions, errors }) => {
  const errorMessage = _.get(errors, name)
  const hasError = !!(errors && errorMessage);

  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={inputClassName({ errors: hasError })}
        {...register(name, validateOptions)}
      />          
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className={errorClassName}>{message}</div>
        )}
      />
    </div>
  );
};

export default InputElement;