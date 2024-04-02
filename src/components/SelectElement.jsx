import _ from 'lodash';

import { cx, cva } from 'class-variance-authority';

import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

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

const optionClassName = cva(
  [
    'px-24px py-18px',
    'text-ui-gray-400',
    '[&:not(:last-child)]:border-b-2 border-ui-gray-200',
    'hover:cursor-pointer',
  ],
  {
    variants: {
      isSelected: {
        true: "text-ui-gray-950"
      },
    }
  }
);

const controlClassName = cx(
  'flex-1 px-20px',
  'text-lg leading-lg text-ui-gray-400',
  'hover:cursor-pointer',
);

const menuClassName = cx(
  'mt-8px',
  'text-lg leading-lg',
  'bg-ui-gray-100 rounded-20px',
)

const errorClassName = cx(
  'relative box-border',
  'max-h-0',
  'text-base leading-base text-ui-red-1',
  'pt-4px max-h-24px opacity-100'
);

const singleValueClassName = cx(
  'text-ui-gray-950'
)

const SelectElement = ({ className, id, options, control, errors }) => {
  const errorMessage = _.get(errors, id)
  const hasError = !!(errors && errorMessage);

  return (
    <div className={className}>
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, ref } }) => (
          <ReactSelect
            instanceId={id}
            unstyled
            maxMenuHeight={"auto"}
            className={selectClassName({ errors: hasError })}
            classNames={{
              control: () => controlClassName,
              menu: () => menuClassName,
              option: ({ isSelected }) => optionClassName({ isSelected: isSelected }),
              singleValue: () => singleValueClassName,
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
