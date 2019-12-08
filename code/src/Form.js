import React, { useState } from "react";
import { Emoji } from "./Emoji";

export const Form = props => {
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.submitForm(message);
    setMessage("");

    if (message < 5) {
      return alert(
        "Message needs to have at least 5 letters. Please try again"
      );
    }
  };

  return (
    <div className="formContainer">
      <form>
        <h3>What's your happy thought?</h3>

        <textarea
          resize="none"
          rows="4"
          minLength="5"
          maxLength="140"
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
            disabled={message.length > 140 ? true : false}
          >
            <Emoji symbol="❤️" label="heart" />
            <span className="button-text">Send happy thought</span>
            <Emoji symbol="❤️" label="heart" />
          </button>
          <p className="textCounter">{message.length}/140</p>
        </div>
      </form>
    </div>
  );
};
