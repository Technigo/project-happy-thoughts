import React, { useState, useEffect } from 'react';

export const Form = (props) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onFormSubmit(message)
  }

  return (
    <form className="thought-input">
      <p>What is making you happy right now?</p>
      <textarea rows="3"
        autoFocus
        value={message}
        placeholder="Type your thought here..."
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className="buttom-input-card">
        <button type="submit" className="send-button"
          onClick={handleSubmit}
          disabled={message.length <= 5 && message.length >= 140 ? true : false}>
          <span role="img" aria-label="heart">❤️ </span>
          Send Happy Thought
      <span role="img" aria-label="heart"> ❤️</span></button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}


// export const Form = (props) => {

//   const handleFormSubmit = (event) => {
//   event.preventDefault()
//   fetch('https://technigo-thoughts.herokuapp.com/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ newThought })
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//     })
// }}

// return (
//   <form className="thought-input" onSubmit={handleFormSubmit}>
//   <p>What is making you happy right now?</p>
//   <label>
//     <input
//       type="text"
//       autoFocus
//       placeholder="Type your thought here..."
//       onChange={event => setNewThought(event.target.value)}
//       value={newThought}
//     />
//     <div className="buttom-input-card">
//       <button className="send-button"><span role="img" aria-label="heart">❤️ </span>
//         Send Happy Thought
//     <span role="img" aria-label="heart">❤️ </span></button>
//       <p className={((newThought.length < 5 || newThought.length >= 140) ? 'wrongLength' : 'goodLength')}>{newThought.length}/140</p>
//     </div>
//   </label>
// </form>
// )