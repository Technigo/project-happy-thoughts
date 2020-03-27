import React, { useState } from 'react'
import './messageInput.css'

export const MessageInput = () => {
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com";
  const [message, setMessage] = useState("");

  const handleClick = event => {
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
      <p>What's making you happy right now?</p>
      <textarea className="textarea"
        rows= '2'
        type="text"
        onChange={event => setMessage(event.target.value)}
        >
      </textarea>
        <h4>{140 - message.length}</h4>
      <button className="btn"
      type="submit"
      onClick={handleClick} 
      disabled={message.length < 5 || message.length > 140}
        ><span role='img' aria-label='Heart'>❤️</span> Send Happy Thought <span role='img' aria-label='Heart'>❤️</span>
      </button>
      
    </form>
    </section>
  )
}