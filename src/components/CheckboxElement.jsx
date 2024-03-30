import React from 'react';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { cx } from 'class-variance-authority';

const checkboxContainer = cx(
  "flex gap-16px items-center mt-auto",
  "text-lg leading-lg text-ui-gray-500"
);

const errorClassName = cx(  
  'relative box-border',
  'max-h-0',
  'text-base leading-base text-ui-red-1',
  'pt-4px max-h-24px opacity-100'
);

const CheckboxElement = ({ name, label, control, register, errors }) => {
  return (
    <>
      <Controller 
        control={control}
        name={name}
        className={checkboxContainer}
        rules={{ required: true }}
        render={() => (
          <label className="flex justify-start items-start mt-auto">
          <div className="bg-white border-[1px] rounded-8px border-ui-gray-200 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-ui-blue-600">
            <input 
              type="checkbox" 
              name={name}
              id={name}
              className="opacity-0 absolute" 
              { ...register(name, { required: 'Обязательное поле' }) }
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="fll-currenit hidden pointer-events-none"
            >
              <path
                d="M2.25 8L5.01193 11.5511C5.39578 12.0446 6.13331 12.0688 6.54869 11.6015L13.75 3.5"
                stroke="#4F46E5"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div>{label}</div>
        </label>
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className={errorClassName}>{message}</div>
        )}
      />
    </>
  );
};

export default CheckboxElement;