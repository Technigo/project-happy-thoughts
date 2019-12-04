import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
    .then (res => res.json())
    .then (json => setThoughts(json));
  }, []);

  // Later, in your code which handles the form submission, you 
// could have something which looks like this to send the new 
// message, get the response from the API, and then add it to 
// the thoughts array:

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('hej')
  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then((res) => res.json())
      .then((newThought) => {
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array:
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
  }
  return (
    <form className="background" onSubmit={handleFormSubmit}>
      <article className="inputField">
        <p>What's making you happy right now?</p>
        <textarea  rows="3" minLength="5" maxLength="140" required className="newThought" onChange={(event) => { setMessage(event.target.value) }} /><br />
        <button className="button" type="submit">💗 Send happy thought 💗</button>
      </article>
      <ul>
        {thoughts.map((thought) => (
          <li className="li" key={thought.message}>{thought.message}<br /><br />
          <div className="heartAndTimeContainer"><div className="heart"><span className="emojiHeart" role="img" area-label="heart">💗 </span> x {thought.hearts}</div><p>{moment(thought.createdAt).fromNow()}</p></div></li>
        ))}
      </ul>
    </form>
  )
}
