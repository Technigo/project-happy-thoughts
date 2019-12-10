import React, { useState } from "react";
import "./happyForm.css";

export const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDeafault()
    onFormSubmit(message)
  }

  return (
    <form className="hej">
      <h3>post thought</h3>
      <textarea rows="3" onChange={event => setMessage(event.target.value)}></textarea>
      <button type="submit" onClick={handleSubmit}>Send</button>
    </form>
  );
};
