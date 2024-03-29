import React from 'react';
import { cx, cva } from 'class-variance-authority';

const inputClassName = cx(
  "h-64px w-full",
  "px-20px",
  "bg-gray-100",
  "rounded-20px border border-ui-gray-200",
  "font-medium text-lg leading-lg text-ui-gray-950",
  "focus:outline-none"
);

const errorClassName = cva(
  [
    'relative box-border',
    'max-h-0',
    'text-base leading-base text-ui-red-1',
    'transition-all'
  ],
  {
    variants: {
      errors: {
        true: 'pt-4px max-h-24px opacity-100',
        false: 'opacity-0'
      }
    }
  }
);

const InputElement = ({ className, type, name, id, placeholder, register, validateOptions, errors }) => {
  return (
    <div className={className}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${inputClassName}`}
        {...register(name, validateOptions)}
      />          
      <div className={errorClassName({ errors: Boolean(errors?.name?.message) })}>{errors?.name?.message}</div>
    </div>
  );
};

export default InputElement;