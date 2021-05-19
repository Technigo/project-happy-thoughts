import React, { useState } from "react";
import "./happythoughts.css";

export const PostHappyThought = (props) => {
  const [message, setMessage] = useState("");

  //function to handle the submit-btn in PostHappyThought.
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/json" },
    })
      //when the message saved to API, then send the new message to the message.
      .then(() => {
        setMessage("");
        props.onFormSubmit(message);
      })
      .catch((error) => {
        console.error(error);
        alert("Try Again!", error);
      });
  };

  return (
    <div className="post-thought-card">
      <form>
        <h3>What makes you happy right now?</h3>
        <textarea
          rows="3"
          value={message}
          minLength="5"
          maxLength="140"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <p>{message.length}/140</p>
        <div>
          <button
            className="send-btn"
            type="submit"
            onClick={handleSubmit}
            disabled={message.length < 5 || message.lenght > 140 ? true : false}
          >
            <span role="img" aria-label="Heart">
              ❤️
            </span>
            Send Happy Thought{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
