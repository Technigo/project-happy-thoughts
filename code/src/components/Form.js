import React, { useState } from 'react'

export const Form = () => {
  const [message, setMessage] = useState('')
  const [newThought, setNewThoughts] = useState([])

  // const submitHandler = () => {
  //   fetch('https://technigo-thoughts.herokuapp.com/', {
  //     method: 'POST',
  //     body: JSON.stringify({ message }),
  //     headers: { 'Content-Type': 'application/json' }
  //   }).catch(() => {
  //     alert('Something gone wrong, but stay positive and try again :)')
  //   })
  // }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message })
    })
      .then((res) => res.json())
      .then((newThought) => {
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array: 
        setNewThoughts((previousThoughts) => [newThought, ...previousThoughts])
      }).catch(() => {
        alert('Something gone wrong, but stay positive and try again :)')
      })
  }



  return (
    <form className="thought-input">
      <p>What's making you happy right now? </p>
      <textarea rows="4" minLength="5" maxLength="140"
        required
        onChange={(e) => { setMessage(e.target.value) }}
      />
      <button className="send-button" type="submit" onClick={handleFormSubmit}>
        <span role="img" aria-label="heart">❤️ </span>
        Send Happy Thought
            <span role="img" aria-label="heart">❤️ </span>
      </button>
      <p className={((message.length < 5 || message.length >= 140) ? 'wrongLength' : 'goodLength')}>{message.length}/140</p>
    </form>


    /* <div className="cards">
        <form className="thought-input">
          <p>What is making you happy right now?</p>
          <label>
            <input
              type="text"
              autoFocus
              placeholder="Type your thought here..."
              onChange={event => setNewThought(event.target.value)}
              value={newThought}
            />
            <button className="send-button">❤️ Send Happy Thought ❤️</button>
          </label>
        </form>
      </div> */
  )
}
