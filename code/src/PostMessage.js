import React, { useState } from "react";
import './postMessage.css';

const HappyURL = "https://happiestthoughtsapi.herokuapp.com/thoughts";

export const PostMessage = props => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = event => {
    event.preventDefault()
    
    fetch (HappyURL, 
      {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({message})
      })
      .then (() => {
        setMessage('')
        props.onFormSubmit(message)
      })
      .catch(err => console.log("error:", err))
  };

  return (
    <form className="postCard">
      <h3>Send a happy thought!</h3>
      <textarea
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <div>
        <button type="submit"
        onClick = {handleSubmit}
        disabled = {message.length < 5 || message.length > 140 ? true : false}>
          <span role="img" aria-label="heart">💖</span>Send thought<span role="img" aria-label="heart">💖</span>
        </button>
        <p>{message.length} /140</p>
      </div>
    </form>
  )
};