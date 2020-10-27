import React, { useState } from 'react';

// import { THOUGHTS_URL } from './ListThoughts'

// const [thoughts, setThoughts] = useState([]);

export const UserThoughts = () => {

  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  // fetch(THOUGHTS_URL,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application / json'
  //     },
  //     body: JSON.stringify({
  //       message: message,

  //     })
  //   }.then(() => {
  //     window.location.reload()
  //   })
  // )

  return (

    <form className="new-thought">
      onSubmit={handleSubmit}
      <div>
        <h3> What's making you happy right now?</h3>
        <textarea
          type="text"
          maxLength='140'
          onChange={e => setMessage(e.target.value)}>
        </textarea>
      </div>
      <div className="submit-button">
        <button
          type="submit"
          disabled={message.length <= 5 || message.lenght >= 140 ? true : false}
          value='❤️️ Send Happy Thought ❤️️' />
        <p>{message.length}/140</p>
      </div>
    </form >
  )
}
