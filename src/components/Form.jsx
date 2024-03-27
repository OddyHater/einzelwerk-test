'use client'

import React from 'react';
import Select from 'react-select';
import { cx } from 'class-variance-authority';
import { useForm } from 'react-hook-form';

import TitleContainer from './TitleContainer';

const formWrapperClassName = cx(
  'flex-1',
  'flex flex-col',
  'box-border',
  'max-w-640px min-h-640px p-40px',

  'bg-white',

  'rounded-32px',
);

const inputsContainerClassName = cx(
  'grid grid-cols-2 gap-16px'
);

const submitButtonClassName = cx(
  'flex justify-center items-center',
  'mt-auto h-64px',

  'font-medium text-18px text-white',

  'bg-ui-blue-600 hover:bg-ui-blue-500',
  'rounded-10000px'
);

const inputClassName = cx(
  'h-64px',
  'px-20px',
  'bg-gray-100',
  'rounded-20px border border-ui-gray-200',
  'text-18px font-medium',
  'focus:outline-none',
);

const checkboxContainer = cx(
  'flex gap-16px items-center',
  'text-18px text-ui-gray-500 leading-26px'
)

const options = [
  { value: 'junior', label: 'Junior' },
  { value: 'middle', label: 'Middle' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'cto', label: 'CTO' },
];

const Form = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  }
  
  return (
    <div className={formWrapperClassName}>
      <TitleContainer
        title={'Drop us a line'}
        subtitle={'Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions.'}
      />
      {/* Вынести form в компонент */}
      {/* Перенести стили в переменную */}
      <form 
        className='flex-1 flex flex-col mt-32px'
        onSubmit={handleSubmit(submit)}
      >
        <div className={inputsContainerClassName}>
          {/* Вынести инпуты в компоненты */}
          {/* Перенести стили в переменную */}
          <input type="text" name="name" id="name" placeholder='Name' className={`${inputClassName} col-span-full`} {...register('name', { required: true })} />
          <input type="text" name="phone" id="phone" placeholder='Phone' className={`${inputClassName} col-start-1 col-end-2`} {...register('phone')} />
          <input type="text" name="email" id="email" placeholder='E-mail' className={`${inputClassName} col-start-2 col-end-3`} {...register('email')} />

          <Select
            instanceId={'grade'}
            className={`${inputClassName} col-span-full`}
            placeholder='Your skill'
            options={options}
          />

        </div>

        <div>
          {/*  */}
        </div>

        <div className={checkboxContainer}>
          <input type="checkbox" name='privacy' id='privacy' required />
          <label htmlFor="privacy">I’m agree with every data you collect</label>
        </div>
        <button
          className={submitButtonClassName}
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;