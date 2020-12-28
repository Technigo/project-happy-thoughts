import React from 'react';

import Button from './Button';

const Sort = ({ onClick }) => {
  return (
    <div>
      <Button
        button="button"
        onClick={onClick}
        text="Most likes"
        value="hearts"
      />
      <Button button="button" onClick={onClick} text="Oldest" value="oldest" />
      <Button button="button" onClick={onClick} text="Newest" value="newest" />
    </div>
  );
};

export default Sort;
