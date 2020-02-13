import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('https://annatereliushappythoughtsapi.herokuapp.com/')
    .then (res => res.json())
    .then (json => setThoughts(json));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('event handleFormsubmit= när man submittar ny text')
  // Sends the POST request with the input from your form 
    fetch('https://annatereliushappythoughtsapi.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((newThought) => {
      // Now you have `newThought` which is the response from the API
      // use it to update the `thoughts` array:
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
      .then(() => setMessage(''))
  }

  const handleHeartClick = (_id) => {
    console.log('test')
    fetch(`https://annatereliushappythoughtsapi.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '{}',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((json) => console.log(json))
   .then(() => onLiked(_id))
  }
  // nedan skapar en lokal "storage" för antal likes innan man uppdaterar sidan.
  const onLiked = (thoughtId) => {
    console.log('testing onLiked')
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div className="background">
      <form className="background" onSubmit={handleFormSubmit}>
        <article className="inputField">
          <p>What's making you happy right now?</p>
          <textarea value={message} rows="3" minLength="5" maxLength="140" required className="newThought" onChange={(event) => { setMessage(event.target.value); console.log("event onChange: Texten är " + event.target.value) }} /><br />
          <button className="button" type="submit">💗 Send Happy Thought 💗</button>
        </article>
      </form>
      <ul>
        {thoughts.map((thought) => (
          <li className="li" key={thought._id}>{thought.message}<br /><br />
            <div className="heartAndTimeContainer"><div className="heart"><button onClick={() => handleHeartClick(thought._id)} className="emojiHeart" role="img" area-label="heart">💗 </button> x {thought.hearts}</div><p>{moment(thought.createdAt).fromNow()}</p></div></li>
        ))}
      </ul>
    </div>
  )
}
