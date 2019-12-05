import React, { useState } from "react";

export const Form = props => {
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.submitForm(message);
  };

  return (
    <div className="formContainer">
      <form>
        <h3>What's your happy thought?</h3>

        <textarea
          resize="none"
          rows="4"
          minLength="5"
          maxLength="60"
          required
          onChange={event => {
            setMessage(event.target.value);
          }}
        />
        <div>
          <button
            className="submitButton"
            type="submit"
            onClick={handleSubmit}
            disabled={message.length < 5 || message.length > 140 ? true : false}
          >
            <span className="heart">❤️</span>
            Send happy thought<span className="heart">❤️</span>
          </button>
          <p className="textCounter">{message.length}/140</p>
        </div>
      </form>
    </div>
  );
};
