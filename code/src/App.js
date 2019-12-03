import React, { useState, useEffect } from 'react'


export const App = () => {
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
      });
  }, []);

  const [thoughts, setThoughts] = useState([]);
  const [userText, setUserText] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText })
    })
      .then((res) => res.json())
      .then((userText) => {
        setThoughts((previousThoughts) => [userText, ...previousThoughts])
      })
  }



  return (
    <div>

      <div className="thoughtBox">
        <form onSubmit={handleFormSubmit}>
          <p> What's making you happy right now?</p>
          <input type="text" onChange={event => setUserText(event.target.value)} value={userText} required />
          <button type="submit">❤️ Send your happy thought!❤️ </button>
        </form>
      </div>


      {thoughts.map(thought => (
        <div className="postedThoughts">
          <p key={thought._id}><h3>{thought.message}</h3> ❤️ x {thought.hearts} {thought.createdAt}</p>
        </div>
      )
      )}
    </div>
  )
};