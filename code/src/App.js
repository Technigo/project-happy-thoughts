import React, { useState, useEffect } from 'react';
import './App.css'


export const App = () => {
  const [thouhgts, setThoughts] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [text, setText] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com')
      .then(res => res.json())
      .then(json => setThoughts(json))
    // .then(json => console.log(json))

  }, [])


  return (
    <div>

      <form onSubmit={event => event.preventDefault()}>
        <div>
          <h4>Whats making you happy right now?</h4>
        </div>
        <input className="formField"
          type="text"
          onChange={event => setText(event.target.value)}
          value={text}
        />

        <ul>
          {thouhgts.map(thought => (
            <li key={thought.message} className="messages">{thought.message}</li>
          ))}

        </ul>
      </form>
    </div>
  )
}