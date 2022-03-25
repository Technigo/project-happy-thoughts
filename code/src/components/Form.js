import React, { useState } from "react";

const Form = ({ handleFormSubmit }) => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const onMessageChange = (e) => {
    const count = message.length;
    if (count > 140) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    setMessage(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (message.length < 140) {
      handleFormSubmit(message);
      setMessage("");
    }
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="thought">
        <p className="thought-title">What&apos;s making you happy right now?</p>
        <textarea
          className={`
         thought-input
          ${alert && "alert"}
        `}
          id="thought"
          name="thought"
          rows="5"
          placeholder="Write your thought..."
          value={message}
          onChange={onMessageChange}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />
      </label>
      <div className="form-interaction">
        <button className="submit" type="submit">
          <span role="img" aria-label="heart icon">
            ❤️
          </span>
          &nbsp;Send Happy Thought&nbsp;
          <span role="img" aria-label="heart icon">
            ❤️
          </span>
        </button>
        <span className="message-counting">{message.length} / 140</span>
      </div>
    </form>
  );
};

export default Form;
