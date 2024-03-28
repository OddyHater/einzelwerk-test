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
  ''
);

const itemClassName = cx(
  ''
);

const dropAreaClassName = cx(
  'max-w-[234px] flex-1',
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
        </ul>
      </div>
      <div className={dropAreaClassName}>

      </div>
  </div>
  );
};

export default Document;