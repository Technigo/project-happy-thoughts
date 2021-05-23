import React from 'react';
import { GoX } from 'react-icons/go';

const EditButton = ({ message, onToggleEdit }) => {
  return (
    <button 
      className="btn"
      onClick={() => onToggleEdit(message._id)}
      aria-label="exit button"
    >
      <GoX 
        size="16px"
        aria-hidden="true"
      />
    </button>
  );
};

export default EditButton;