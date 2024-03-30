"use client";

import React from "react";
import { cx } from "class-variance-authority";
import { useForm } from "react-hook-form";

import TitleContainer from "./TitleContainer";
import Document from "./Document";
import InputElement from "@/components/InputElement";
import SelectElement from "./SelectElement";
import CheckboxElement from "./CheckboxElement";

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

const checkboxContainer = cx(
  "flex gap-16px items-center mt-auto",
  "text-lg leading-lg text-ui-gray-500"
);

const nameValidation = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 2,
    message: 'Минимум 2 символа'
  }
};

const phoneValidation = {
  required: 'Поле обязательно к заполнению'
};

const selectValidation = { 
  required: "Веберете грейд"
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
    control,
    formState: {
      errors,
    },
  } = useForm();

  const OnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={formWrapperClassName}>

      <TitleContainer
        title={"Drop us a line"}
        subtitle={"Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions."}
      />

      <form
        className="flex-1 flex flex-col mt-32px"
        onSubmit={handleSubmit(OnSubmit)}
      >

        <div className={inputsContainerClassName}>

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

          <InputElement 
            className={'col-start-1 col-end-2'}
            type={'text'}
            name={'phone'}
            id={'phone'}
            placeholder="Phone"
            register={register}
            validateOptions={phoneValidation}
            errors={errors}
          />

          <InputElement
            className={'col-start-2 col-end-3'}
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            register={register}
            validateOptions={phoneValidation}
            errors={errors}
          />

          <SelectElement
            className={'col-span-full'}
            id={'grade'}
            options={options}
            control={control}
            validateOptions={selectValidation}
            errors={errors}
          />
        </div>

        <Document />

        <CheckboxElement
          name='privacy'
          label='I’m agree with every data you collect'
          control={control}
          register={register}
          errors={errors}
        />

        <button className={submitButtonClassName} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
