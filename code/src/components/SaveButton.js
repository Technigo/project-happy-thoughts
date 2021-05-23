import React from 'react';
import { GoCheck } from 'react-icons/go';

const SaveButton = ({ onSaveEditedContent }) => {
  return (
    <button 
      className="btn"
      onClick={onSaveEditedContent}
      aria-label="save button"
    >
      <GoCheck 
        size="16px"
        aria-hidden="true"
      />
    </button>
  );
};

export default SaveButton;