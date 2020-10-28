import React, { useState } from "react";

import "../css/happyForm.css";

export const HappyForm = props => {
  const [status, setStatus] = useState("");
  const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"


  const handleSubmit = event => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ status }),
      headers: { "Content-type": "application/json" }
    })
      .then(() => {
        setStatus("");
        props.onFormSubmit(status);
      })
      .catch((err) => console.log("error:", err));
  };

  return (
    <form className="form-container">
      <label>What's making you happy right now?</label>
      <textarea
        rows="3"
        value={status}
        onChange={event => setStatus(event.target.value)}
      ></textarea>
      <div className="form-footer">
        <button 
        className="send-button"
        type="submit" 
        onClick={handleSubmit} 
        disabled={status.length < 3 || status.length > 140 ? true : false}
        >
          Send Happy Thought
        </button>
        <p>{status.length} / 140</p>
      </div>
    </form>
  );
};
