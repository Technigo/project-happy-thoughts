import React, { useState } from 'react'
import './messageInput.css'

export const MessageInput = () => {
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com";
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    fetch(MESSAGES_URL, 
      {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({message: message})
      }
    ).then(()=>{
      window.location.reload();
    })

  };
  
  return (
    <form className="message-card" sonSubmit={handleSubmit}>
      <h2>Post a Happy Thought!</h2>
      <textarea 
        rows= '2'
        type="text"
        onChange={event => setMessage(event.target.value)}
        >
      </textarea>
      <input
      type="submit"
      value="Add Message">
      </input>
    </form>
  )
}