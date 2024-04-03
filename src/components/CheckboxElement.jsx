import { cx } from 'class-variance-authority';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const checkboxContainer = cx(
  'flex gap-16px items-center mt-auto',
);

const containerClassName = cx(
  'flex justify-start items-start mt-auto',
  'text-lg leading-lg text-ui-gray-500'
)

const checkboxClassname = cx(
  'flex flex-shrink-0 justify-center items-center',
  'w-6 h-6 mr-2',
  'bg-white border-[1px] border-ui-gray-200 rounded-8px checked:border-ui-blue-600'

)

const inputClassName = cx(
  'opacity-0 absolute',
  'w-6 h-6',
)

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
          <div className={containerClassName}>
            <input
              type="checkbox"
              name={name}
              id={name}
              className={inputClassName}
              { ...register(name) }
            />
            <div className={checkboxClassname}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className='hidden text-blue-600 pointer-events-none'
              >
                <path
                  d="M2.25 8L5.01193 11.5511C5.39578 12.0446 6.13331 12.0688 6.54869 11.6015L13.75 3.5"
                  stroke="#4F46E5"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <label htmlFor={name} className='select-none'>{label}</label>
          </div>
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
