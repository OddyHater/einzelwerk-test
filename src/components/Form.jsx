"use client";

import React from "react";
import Select from "react-select";
import { cva, cx } from "class-variance-authority";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";

import TitleContainer from "./TitleContainer";
import Document from "./Document";
import InputElement from "@/InputElement";

const formWrapperClassName = cx(
  "flex-1",
  "flex flex-col",
  "box-border",
  "max-w-640px min-h-640px p-40px",

  "bg-white",

  "rounded-32px"
);

const inputsContainerClassName = cx(
  "grid grid-cols-2 gap-16px"
);

const submitButtonClassName = cx(
  "flex justify-center items-center",
  "h-64px mt-24px",

  "font-thin text-lg leading-lg text-white",

  "bg-ui-blue-600 hover:bg-ui-blue-500",
  "rounded-10000px"
);

const inputContainerClassName = cx(
  ''
)

const inputClassName = cx(
  "h-64px w-full",
  "px-20px",
  "bg-gray-100",
  "rounded-20px border border-ui-gray-200",
  "font-medium text-lg leading-lg text-ui-gray-950",
  "focus:outline-none"
);

const checkboxContainer = cx(
  "flex gap-16px items-center mt-auto",
  "text-lg leading-lg text-ui-gray-500"
);

const selectClassName = cx(
  "h-64px",
  "flex",
  "bg-gray-100",
  "rounded-20px border border-ui-gray-200",
  "text-18px font-medium",
  "justify-between"
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

const nameValidation = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 2,
    message: 'Минимум 2 символа'
  }
};

const options = [
  { value: "junior", label: "Junior" },
  { value: "middle", label: "Middle" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead" },
  { value: "cto", label: "CTO" },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } = useForm();

  const OnSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={formWrapperClassName}>
      <TitleContainer
        title={"Drop us a line"}
        subtitle={"Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions."}
      />
      {/* Вынести form в компонент */}
      {/* Перенести стили в переменную */}
      <form
        className="flex-1 flex flex-col mt-32px"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className={inputsContainerClassName}>
          {/* Вынести инпуты в компоненты */}
          {/* Перенести стили в переменную */}
          
          <InputElement
            className={'col-span-full'}
            type={'text'}
            name={'name'}
            id={'name'}
            placeholder={'Name'}
            register={register}
            validateOptions={nameValidation}
            errors={errors}
          />

          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className={`${inputClassName} col-start-1 col-end-2`}
            {...register("phone")}
          />

          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            className={`${inputClassName} col-start-2 col-end-3`}
            {...register("email")}
          />


        <Select
          instanceId={"grade"}
            unstyled
            maxMenuHeight={"auto"}
            className={`${selectClassName} col-span-full`}
            classNames={{
              control: () =>
              "flex-1 text-ui-gray-400 px-20px hover:cursor-pointer text-lg leading-lg",
              menu: () => "mt-8px bg-ui-gray-100 rounded-20px font-arboria text-lg leading-lg",
              option: ({ isFocused, isSelected }) =>
              clsx(
                isSelected && "text-ui-gray-950",
                "px-24px py-18px [&:not(:last-child)]:border-b-2 border-ui-gray-200 hover:cursor-pointer text-ui-gray-400"
                ),
                singleValue: () => "text-ui-gray-950 font-arboria",
              }}
              placeholder="Your skill"
            options={options}
        />
        </div>

        <Document />

        <div className={checkboxContainer}>
          <label className="flex justify-start items-start">
            <div className="bg-white border-[1px] rounded-8px border-ui-gray-200 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-ui-blue-600">
              <input type="checkbox" className="opacity-0 absolute" />
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
            <div>I’m agree with every data you collect</div>
          </label>
        </div>

        <button className={submitButtonClassName} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
