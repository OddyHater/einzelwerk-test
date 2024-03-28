import React from 'react';
import { cx } from 'class-variance-authority';

const wrapperClassName = cx(
  'flex gap-16px mb-24px'
);

const textContainerClassName = cx(
  'flex-1'
);

const titleClassName = cx(
  'mb-16px',
  'text-ui-gray-950 text-16px font-medium'
);

const subtitleClassName = cx(
  'mb-12px',
  'text-ui-gray-400 text-12px'
);

const listClassName = cx(
  'flex flex-wrap gap-8px'
);

const itemClassName = cx(
  'bg-ui-gray-100',
  'px-6px py-3px',
  'rounded-1000px'
);

const dropAreaClassName = cx(
  'max-w-[234px] flex-1 flex justify-center items-center',
  'border-[1px] border-ui-gray-400 border-dashed',
  'rounded-20px'
);

const Document = () => {
  return (
    <div className={wrapperClassName}>
      <div className={textContainerClassName}>
        <h3 className={titleClassName}>Dokument hochladen</h3>
        <p className={subtitleClassName}>
          Klicken Sie auf die Schaltfläche oder ziehen Sie ein Dokument im PDF-, DOCX-, PNG.
        </p>
        <ul className={listClassName}>
          <li className={itemClassName}>doc1.pdf</li>
          <li className={itemClassName}>doc1.pdf</li>
          <li className={itemClassName}>doc1.pdf</li>
          <li className={itemClassName}>doc1.pdf</li>
        </ul>
      </div>
      <div className={dropAreaClassName}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
  </div>
  );
};

export default Document;
