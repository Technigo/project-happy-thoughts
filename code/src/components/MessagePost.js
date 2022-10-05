import React, { useState } from 'react';

const MessagePost = () => {
  const [newPost, setNewPost] = useState('')
  const handleSubmit = (event) => {
    const endpoint = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    event.preventDefault();
    fetch(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newPost })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="message-post message-container">
      <form onSubmit={handleSubmit} action="https://happy-thoughts-technigo.herokuapp.com/thoughts" method="POST">
        <label htmlFor="message-input"> <p>What is making you happy right now?</p>
          <input
            name="message"
            className="text-input"
            id="message-input"
            type="text"
            onChange={(event) => setNewPost(event.target.value)} />
        </label>
        <button type="submit">❤️ Send happy thought ❤️</button>
      </form>
    </div>
  )
}

export default MessagePost