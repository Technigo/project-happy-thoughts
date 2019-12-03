import React, { useState, useEffect } from 'react';
import './App.css'


export const App = () => {
  const [thouhgts, setThoughts] = useState([])
  const [messages, setMessages] = useState()
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
        <div className="headForm">
          <p>What's making you happy right now?</p>

          <input className="form-text"
            type="text"
            onChange={event => setText(event.target.value)}
            value={text}

          />
        </div>
      </form>


      <form>
        <ul>
          {thouhgts.map(thought => (
            <li key={thought.message} className="messages">{thought.message}</li>
          ))}

        </ul>
      </form>
    </div>
  )
}