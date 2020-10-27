import React, { useState } from 'react';
import { Emoji } from "./Emoji";
import './PostContent.css';

export const PostContent = () => {
  const CONTENT_URL = "https://https://happy-thoughts-technigo.herokuapp.com/thoughts.herokuapp.com/messages";
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = event => {
    event.preventDefault()

    fetch(CONTENT_URL,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, name })
    }
    ).then(() => {
      window.location.reload()
    })
  }
  return (
    <form onSubmit={handleSubmit} className="post-content">
      <h1 className="happyheader-text">What makes you happy?</h1>
      <textarea
        value={message}
        tabIndex="0"
        aria-label="Input for text"
        className="form-input"
        maxLength="140"
        onChange={event => setMessage(event.target.value)}
        required>
      </textarea>
      <input
        type="text"
        placeholder="Name"
        value={name}
        aria-label="input for text"
        className="name-input"
        onChange={event => setName(event.target.value)}
      >
      </input>
      <div className="letter-length">
        <p>{message.length}/140</p>
      </div>
      <button
        className="submit-button"
        type="submit"
        disabled={message.length < 5 && message.length > 140 ? true : false}>
        <Emoji symbol ="x" /> Send stoke! <Emoji symbol="x" />
      </button>
    </form>
  );
};

