import React from 'react';
import { GoTrashcan } from 'react-icons/go';

const DeleteButton = ({ message, onDeleteMessage }) => {
  return (
    <button 
      className="delete-button"
      onClick={() => onDeleteMessage(message._id)}
    >
      <GoTrashcan 
        size="16px"
      />
    </button>
  );
};

export default DeleteButton;