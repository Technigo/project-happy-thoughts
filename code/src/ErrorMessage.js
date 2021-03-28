import React from 'react'; 

const ErrorMessage = ({ errorMessage }) => {
  return (
    <p className="error-message">{errorMessage}</p>
  );
};

export default ErrorMessage;