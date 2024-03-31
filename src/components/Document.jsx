import React from 'react';

import { Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';

import { cx, cva } from 'class-variance-authority';

const wrapperClassName = cx(
  'flex gap-16px mt-16px'
);

const textContainerClassName = cx(
  'flex-1'
);

const titleClassName = cx(
  'mb-16px',
  'font-medium text-base leading-xs text-ui-gray-950'
);

const subtitleClassName = cx(
  'mb-12px',
  'text-ui-gray-400 text-xs leading-xs'
);

const listClassName = cx(
  'flex flex-wrap gap-8px'
);

const itemClassName = cx(
  'bg-ui-gray-100',
  'px-6px py-3px',
  'rounded-1000px'
);

const dropAreaClassName = cva(
  [
    'max-w-[234px] flex-1 flex justify-center items-center',
    'border-[1px] border-ui-gray-400 border-dashed',
    'rounded-20px'
  ],
  {
    variants: {
      isActive: {
        true: 'border-ui-blue-500'
      }
    }
  }
);

const Document = ({ control, name }) => {
  return (

    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className={wrapperClassName}>
          <div className={textContainerClassName}>
            <h3 className={titleClassName}>Dokument hochladen</h3>
            <p className={subtitleClassName}>Klicken Sie auf die Schaltfläche oder ziehen Sie ein Dokument im PDF-, DOCX-, PNG.</p>
            <ul className={listClassName}>

            </ul>
          </div>
          <Dropzone onDrop={(file) => {
            onChange(file[0].path);
          }}>
            {({ getInputProps, getRootProps, isDragActive }) => (
              <div className={dropAreaClassName({ isActive: isDragActive })} {...getRootProps()}>
                <input {...getInputProps()} onBlur={onBlur} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </Dropzone>
        </div>
      )}
    />
  )
};

export default Document;
