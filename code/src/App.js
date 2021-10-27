import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import moment from 'moment';
import {API_URL} from './utils/urls.js'

export const App = () => {
  const[thoughts, setThoughts] = useState([])
  const[newThought, setNewThought] = useState('')
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: newThought })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .finally(() => setLoading(false))
  }
  
  const onLikesIncreased = (thought_id) => {
    const options = {
      method: 'POST'
    }
    setLoading(true)

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought_id}/like`, options)
    .then(res => res.json())
    .then(fetchThoughts())
    .finally(() => setLoading(false))
  }

  return (
    <main className="main-container">
      <div className="container">
        <form className="inner-container-form" onSubmit={onFormSubmit}>
          <label htmlFor="newThought">What's making you happy right now?</label>
          <textarea 
            id="newThought"
            type="text"
            value={newThought}
            className="thought-input"
            onChange={(e) => setNewThought(e.target.value)}/>
          <button 
            type="submit"
            disabled={newThought.length < 5 || newThought.length > 140}
            className="thought-btn">
              <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span> 
              Send happy thought 
              <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span>
          </button>
          {loading && <Loading />}
        </form>
      </div>


      {thoughts.map(thought => (
        <div className="container" key={thought._id}>
          <div className="inner-container">
            <p>{thought.message}</p>

            <div className="heart-time">
              <div className="heart-container">
                <button onClick={() => onLikesIncreased(thought._id)} className={(thought.hearts === 0) ? "heart-btn-unloved"  : "heart-btn-loved"}>
                  <span role="img" aria-label="heart-emoji">&#10084;&#65039;</span>
                </button>
                <p>x {thought.hearts}</p>
              </div>
              <p className="date">
                {moment(thought.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>

      ))}
    </main>
  )
}
