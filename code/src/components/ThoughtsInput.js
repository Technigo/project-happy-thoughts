import React, { useState } from "react";


const URL = "https://happy-project-moa.herokuapp.com/thoughts";

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
      <form className="input-container">
        <label htmlFor="thoughts">Spread Some Happiness</label>
        <textarea
          id="thoughts"
          name="thoughts"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <div className="input-features">
          <button
            className="thought-button"
            type="submit"
            onClick={handleSubmit}
            disabled={message.length < 5 || message.length > 140 ? true : false}
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>
            Send a Happy Thought
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </button>
          <p className="text-length">
            <span
              style={{
                color:
                  message.length < 5 || message.length > 140
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
