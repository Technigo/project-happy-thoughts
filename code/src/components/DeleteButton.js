import React from 'react';
import { GoTrashcan } from 'react-icons/go';

const DeleteButton = ({ message, onDeleteMessage }) => {
  return (
    <button 
      className="btn"
      onClick={() => onDeleteMessage(message._id)}
      aria-label="delete message"
    >
      <GoTrashcan 
        size="16px"
        aria-hidden="true"
      />
    </button>
  );
};

export default DeleteButton;