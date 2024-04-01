import _ from 'lodash';

import { cx, cva } from 'class-variance-authority';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Dropzone from 'react-dropzone';

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

const dropAreaClassName = cva(
  [
    'relative',
    'max-w-[234px] h-[120px] flex-1 flex justify-center items-center',
    'border-[1px] border-ui-gray-400 border-dashed',
    'rounded-20px',
    'cursor-pointer'
  ],
  {
    variants: {
      isActive: {
        true: 'border-ui-blue-600'
      },
      isError: {
        true: 'border-ui-red-1'
      }
    }
  }
);

const listClassName = cx(
  'flex flex-wrap gap-8px'
);

const itemClassName = cx(
  'px-6px py-3px',
  'text-xs',
  'bg-ui-gray-100',
  'rounded-1000px'
);

const errorClassName = cx(
  'absolute -bottom-6 box-border',
  'max-h-0',
  'text-base leading-base text-ui-red-1',
  'pt-4px max-h-24px opacity-100'
);

const FileDrop = ({ control, name, setValue, register, errors }) => {
  const errorMessage = _.get(errors, name)
  const hasError = !!(errors && errorMessage);

  return (
    <>
    <Controller
      control={control}
      name={name}
      rules={{
        required: { value: true, message: 'This field is required' },
      }}
      render={({ field: { onChange, onBlur }, fieldState }) => (
        <div className={wrapperClassName}>

        <Dropzone
          accept={{"text/csv":['.pdf', '.docx'], "image/png": ['.png']}}
          onDrop={([file]) => {
            file && setValue('files', file, {
              shouldValidate: true
            })
          }}
        >
          {({
            getRootProps, getInputProps, isDragActive, acceptedFiles
          }) => (
            <>
              <div className={textContainerClassName}>
                <h3 className={titleClassName}>Dokument hochladen</h3>
                <p className={subtitleClassName}>Klicken Sie auf die Schaltfläche oder ziehen Sie ein Dokument im PDF-, DOCX-, PNG.</p>
                <ul className={listClassName}>
                  {acceptedFiles.map((item, index) => (
                    <li className={itemClassName} key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
              <div className={dropAreaClassName({ isActive: isDragActive, isError: hasError })} {...getRootProps()}>
                <input
                  {...getInputProps({ id: 'spreadsheet', onChange, onBlur, ...register('files') })}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                    <div className={errorClassName}>Should not be empty</div>
                  )}
                />
              </div>
            </>
          )}
        </Dropzone>
        </div>
      )}
    />

  </>
  );
};

export default FileDrop;
