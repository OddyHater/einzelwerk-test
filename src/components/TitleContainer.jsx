import React from 'react';
import { cx } from 'class-variance-authority';

const containerClassName = cx(
  'flex flex-col gap-16px'
)

const titleClassName = cx(
  'font-semibold text-40px -tracking-1.2px text-ui-gray-950'
);

const subtitleClassName = cx(
  'text-18px -tracking-0.2px text-ui-gray-700'
);

const TitleContainer = ({ title, subtitle }) => {
  return (
    <div className={containerClassName}>
      <h1 className={titleClassName}>{title}</h1>
      <p className={subtitleClassName}>{subtitle}</p>
    </div>
  );
};

export default TitleContainer;