import React from 'react';

import Button from './Button';

const Sort = ({ onClick }) => {
  return (
    <div className="Button__sort-container">
      <Button
        className="Button__sort"
        button="button"
        onClick={onClick}
        text="Most likes"
        value="hearts"
      />
      <Button
        className="Button__sort"
        button="button"
        onClick={onClick}
        text="Oldest"
        value="oldest"
      />
      <Button
        className="Button__sort"
        button="button"
        onClick={onClick}
        text="Newest"
        value="newest"
      />
    </div>
  );
};

export default Sort;
