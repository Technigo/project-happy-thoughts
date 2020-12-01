import React from 'react';

const Loader = ({ className }) => {
  return (
    <div className={className}>
      <img
        className="Loader__image"
        src="./assets/heart.svg"
        alt="heart icon"
      />
    </div>
  );
};

export default Loader;
