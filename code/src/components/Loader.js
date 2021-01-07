import React from 'react';

const Loader = ({ className, classNameImage }) => {
  return (
    <div className={className}>
      <img
        className={classNameImage}
        src="./assets/heart-640x640.png"
        alt="heart icon"
      />
    </div>
  );
};

export default Loader;
