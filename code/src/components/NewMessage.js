import React, { useEffect, useState } from 'react';

const NewMessage = () => {
  const [newPost, setNewPost] = useState('')
  const [maxWarning, setMaxWarning] = useState(false)

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

  const handleInputTextChange = (event) => {
    setNewPost(event.target.value);
  }

  useEffect(() => {
    if (newPost.length === 140) {
      setMaxWarning(true)
    } else {
      setMaxWarning(false)
    }
  }, [newPost])

  return (
    <article className="message-post message-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input"> <p>What is making you happy right now?</p>
          <textarea
            maxLength={140}
            name="message"
            className={`text-input ${maxWarning ? 'red-text' : 'black-text'}`}
            id="text-input"
            onChange={handleInputTextChange} />
          <p className="message-info number-of-characters">Characters: {newPost.length} / 140</p>
        </label>
        <button type="submit">❤️ Send happy thought ❤️</button>
      </form>
    </article>
  )
}
export default NewMessage;