import React, { useState } from "react";

const url = "https://technigo-thoughts.herokuapp.com/";

export const HappyForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    }).catch(err => console.log("error:", err));
  };

  return (
    <form>
      <h3>Post a happy thought!</h3>
      <p>{message}</p>
      <textarea
        rows="3"
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <button type="submit" onClick={handleSubmit}>
        Send a happy thought!
      </button>
    </form>
  );
};
