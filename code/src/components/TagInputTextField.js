import React from 'react';

const TagInputTextField = ({ newTag, onNewTag }) => {
  return (
    <div className="new-tag-container">
      <label 
        className="new-tag-label"
        htmlFor="newTag"
      >
        Tag
      </label>
      <input
        className="new-tag-text-field"
        id="newTag"
        type="text"
        value={newTag}
        onChange={onNewTag}
      ></input>
    </div>
  );
};

export default TagInputTextField;