import React from 'react'; 

const ErrorPopup = ({ errorMessage }) => {
  return (
    <>
      <p className="error-message">{errorMessage}</p>
    </>
  );
};

export default ErrorPopup;