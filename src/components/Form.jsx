import React from 'react';
import { cx } from 'class-variance-authority';

import TitleContainer from './TitleContainer';

const formWrapperClassName = cx(
  'flex-1',
  'flex flex-col',
  'box-border',
  'max-w-640px min-h-640px p-40px',

  'bg-white',

  'rounded-32px',
);

const submitButtonClassName = cx(
  'flex justify-center items-center',
  'mt-auto h-64px',

  'font-medium text-18px text-white',

  'bg-ui-blue-600 hover:bg-ui-blue-500',
  'rounded-10000px'
)

const Form = () => {
  return (
    <div className={formWrapperClassName}>
      <TitleContainer
        title={'Drop us a line'}
        subtitle={'Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions.'}
      />
      <form className='flex-1 flex flex-col'>
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