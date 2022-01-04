import React from 'react';

export const FilterButtons = ({handleOldestButton, handleNewestButton}) => {
  return (
    <div className="button-container">
      <button onClick={handleNewestButton}>&bull; Newest Thoughts &bull;</button>
      <button onClick={handleOldestButton}>&bull; Oldest Thoughts &bull;</button>
    </div>
  );
};


