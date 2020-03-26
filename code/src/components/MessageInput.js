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
        body:JSON.stringify({message})
      }
    ).then(()=>{
      window.location.reload();
    })

  };
  
  return (
    <section className="input-section">
    <form className="message-card">
      <h2>What's making you happy right now?</h2>
      <textarea 
        rows= '2'
        type="text"
        onChange={event => setMessage(event.target.value)}
        >
      </textarea>
      <button
      type="submit"
      onClick={handleSubmit} 
      disabled={message.length < 5 || message.length > 140}
      >❤️ Send Happy Thought ❤️
      </button>
    </form>
    </section>
  )
}