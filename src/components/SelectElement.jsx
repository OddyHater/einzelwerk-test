import React from 'react';

import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const _ = require('lodash');
import { cx, cva } from 'class-variance-authority';
import clsx from 'clsx';

const selectClassName = cva(
  [
    "h-64px",
    "flex",
    "bg-gray-100",
    "rounded-20px border border-ui-gray-200",
    "text-18px font-medium",
    "justify-between"
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

const SelectElement = ({ className, id, options, control, validateOptions, errors }) => {
  const errorMessage = _.get(errors, id)
  const hasError = !!(errors && errorMessage);

  return (
    <div className={className}>
      <Controller
        control={control}
        name={id}
        rules={validateOptions}
        render={({ field: { onChange, ref } }) => (
          <ReactSelect
            instanceId={id}
            unstyled
            maxMenuHeight={"auto"}
            className={selectClassName({ errors: hasError })}
            classNames={{
              control: () => "flex-1 text-ui-gray-400 px-20px hover:cursor-pointer text-lg leading-lg",
              menu: () => "mt-8px bg-ui-gray-100 rounded-20px font-arboria text-lg leading-lg",
              option: ({ isSelected }) =>
                clsx(
                  isSelected && "text-ui-gray-950",
                  "px-24px py-18px [&:not(:last-child)]:border-b-2 border-ui-gray-200 hover:cursor-pointer text-ui-gray-400"
                ),
              singleValue: () => "text-ui-gray-950 font-arboria",
            }}
            placeholder="Your skill"
            onChange={(selectedOption) => {
              onChange(selectedOption.value);
            }}
            inputRef={ref}
            options={options}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        className={errorClassName}
        render={({ message }) => (
          <div className={errorClassName}>{message}</div>
        )}
      />
    </div>
  );
};

export default SelectElement;