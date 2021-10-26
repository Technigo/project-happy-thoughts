import React, { useEffect, useState } from 'react'
import moment from 'moment'
import FormNewThought from './components/FormNewThought'

import { API_URL, LIKES_URL } from './utils/urls'


export const App = () => {
  // States
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, [])

  const onLikeSubmit = (id) => {
    const likes = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/text'
      }
    }
    // helps to change the likes on thought depending on which thought user clicked
    const onLikeChange = thoughts.map(thought => {
      if (thought._id === id) {
        thought.hearts += 1
      }
      return thought
    })

    fetch(LIKES_URL(id), likes)
      .then(res => res.json())
      .then(() => setThoughts(onLikeChange))
  }

  // console.log(thoughts)
  return (
    <main className="main-container">
      <FormNewThought
        newThought={newThought}
        setNewThought={setNewThought}
        thoughts={thoughts}
        setThoughts={setThoughts}
      />

      {thoughts.map(thought => (
        <div key={thought._id} className="thought-card">
          <p className="thought-title">{thought.message}</p>
          <div className="like-time-container">
            <div className="likes-amount-container">
              <button onClick={() => onLikeSubmit(thought._id)} className={thought.hearts > 0 ? 'liked-heart' : 'unliked-heart'}>
                <span aria-label="heart" role="img">❤️</span>
              </button>
              <p className="likes-counter"> x {thought.hearts}</p>
            </div>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div >
      ))}
    </main >
  )
}

export default App
