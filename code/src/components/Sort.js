import React from 'react';

import Button from './Button';

const Sort = ({ onClick }) => {
  return (
    <div className="button__sort-container">
      <Button
        className="button button__sort"
        button="button"
        onClick={onClick}
        text="Most likes"
        value="hearts"
      />
      <Button
        className="button button__sort"
        button="button"
        onClick={onClick}
        text="Oldest"
        value="oldest"
      />
      <Button
        className="button button__sort"
        button="button"
        onClick={onClick}
        text="Newest"
        value="newest"
      />
    </div>
  );
};

export default Sort;
