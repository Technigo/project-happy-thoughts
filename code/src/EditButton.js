import React from 'react';
import { GoPencil } from 'react-icons/go';

const EditButton = ({ message, onToggleEdit }) => {
  return (
    <button 
      className="btn"
      onClick={() => onToggleEdit(message._id)}
      aria-label="edit message"
    >
      <GoPencil 
        size="16px"
        aria-hidden="true"
      />
    </button>
  );
};

export default EditButton;