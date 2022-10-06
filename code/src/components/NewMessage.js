import React, { useState } from 'react';

const NewMessage = () => {
  const [newPost, setNewPost] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      'https://happy-thoughts-technigo.herokuapp.com/thoughts',
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input"> <p>What is making you happy right now?</p>
          <textarea
            name="message"
            className="text-input"
            id="text-input"
            onChange={(event) => setNewPost(event.target.value)} />
        </label>
        <button type="submit">❤️ Send happy thought ❤️</button>
      </form>
    </div>
  )
}
export default NewMessage;