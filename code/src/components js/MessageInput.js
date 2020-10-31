import React, { useState } from 'react'
import "components css/messageInput.css"; 

export const MessageInput = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [message, setMessage] = useState("");
  const handleSubmit = event => {
    // Prevent page from refreshing automatically
    event.preventDefault()
    // Post the current value of the text input to the server
    fetch(MESSAGES_URL,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // Send the JSON as a string 
      body: JSON.stringify({ message: message })
    }
      ).then(()=>{
      // Reload the page after the request is complete
        window.location.reload();
      });
    }

return (
  <form className="happy-form" onSubmit={handleSubmit}>
    <input type="text" 
          onChange={event => setMessage(event.target.value)}
          className="form-text">
    </input>
    <input type="submit"
            className="form-button"
            value={"Send"} 
            disabled={message.length < 6 || message.length > 140 ? true : false}>
    </input>
    <p className="count">{message.length} / 140</p>
  </form>
    )
}
