import React from 'react';
import Lottie from 'lottie-react';
import hLoader from 'lottie/hLoader'

const Loader = () => {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <Lottie animationData={hLoader} loop />
      </div>
    </div>
  );
};

export default Loader