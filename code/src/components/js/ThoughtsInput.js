import React, { useState } from "react";

import "../css/thoughtsInput.css";

const URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const ThoughtsInput = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setMessage("");
        onFormSubmit(message);
      })
      .catch((err) => console.log("error:", err));
  };

  return (
    <section className="input-section">
      <form className="form-container">
        <label htmlFor="thoughts">What's making you happy right now?</label>
        <textarea
          id="thoughts"
          name="thoughts"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
        <div className="form-footer">
          <button
            className="send-button"
            type="submit"
            onClick={handleSubmit}
            disabled={message.length < 3 || message.length > 140 ? true : false}
          >
            <img
              src="./emoji.png"
              className="send-button-icon"
              alt="love-letter"
            ></img>
            Send happy thought
            <img
              src="./emoji.png"
              className="send-button-icon"
              alt="love-letter"
            ></img>
          </button>
          <p className="message-length">
            <span
              style={{
                color:
                  message.length < 3 || message.length > 140
                    ? "#FF0000"
                    : "#000000",
              }}
            >
              {message.length}
            </span>{" "}
            / 140
          </p>
        </div>
      </form>
    </section>
  );
};
