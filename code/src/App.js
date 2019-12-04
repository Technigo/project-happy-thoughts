import React, { useEffect, useState } from 'react'
import Timestamp from 'react-timeago'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setThoughts(json)
      })
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if(newThought.length>=5 && newThought.length<=140) {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify({message: newThought}),
      headers: { 'Content-Type': 'application/json' }
    })
    } else {
      setError(true)
    }
  }

  // const handleThoughtLike = (event) => {
  //   event.preventDefault()

  //   fetch("https://technigo-thoughts.herokuapp.com/{_id}/like", {
  //     method: 'POST'
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //     })
  //   } 


  return (
    <div className="main-container">
      <h1>😃 Happy Thoughts 😃</h1>
    
    <div className="question-card">
      <form>
      {!error &&(<p className="question">What is making you happy right now?</p>)}
      {error &&(<p className="required">Please write between 5 and 140 characters</p>)}

      <label>
      <input 
        type="textarea"
        rows="3"
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
      />
      </label>
      <button 
        className="send-form"
        type="submit"
        onClick={handleFormSubmit}
        >
        ❤️ Send Happy Thought ❤️
      </button>

      </form>
    </div>

      <ul>
        {thoughts.map(thought => (
          <div className="cards">
            <li key={thought._id} className="message">{thought.message}</li>
            <div className="cards-bottom">
            <li className="hearts">
              <button className="heart-button" type="submit">❤️</button> x {thought.hearts}</li>
            <li className="time"><Timestamp date={thought.createdAt}/></li>
            </div>
          </div>
        ))}
      </ul>

    </div>
  )
}

