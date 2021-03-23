import React from "react";

import "../index.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="main-title">What's making you happy right now?</h1>
        <div className="submit-container">
          <input type="text" />
          <button type="submit">Send Happy Thought</button>
        </div>
      </div>
    </>
  );
};

export default Form;
