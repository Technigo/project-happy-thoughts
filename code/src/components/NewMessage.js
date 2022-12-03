import React, { useEffect, useState } from 'react';

const NewMessage = () => {
  const [newPost, setNewPost] = useState('')
  const [thinkersName, setThinkersName] = useState('')
  const [maxWarning, setMaxWarning] = useState(false)

  const handleSubmit = (event) => {
    console.log(thinkersName)
    event.preventDefault();
    fetch(
      'https://project-happy-thoughts-api-tyqwqvxomq-lz.a.run.app/thoughts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newPost, name: thinkersName })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  const handleInputNameChange = (event) => {
    setThinkersName(event.target.value);
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
        <label htmlFor="text-input"> <h1>What is making you happy right now?</h1>
          <input
            type={"text'"}
            placeholder="What is your name?"
            onChange={handleInputNameChange} />
          <textarea
            maxLength={140}
            minLength={5}
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