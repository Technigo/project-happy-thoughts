import React from 'react';

const EditInputField = ({ editContent, onInputChange }) => {
  return (
    <input
      className="edit-input-field"
      type="text"
      value={editContent}
      onChange={onInputChange}  
    />
  );
};

export default EditInputField;