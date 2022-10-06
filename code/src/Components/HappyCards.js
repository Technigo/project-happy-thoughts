/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { formatDistance } from 'date-fns'
import Form from './Form'

// Creating HappyThoughtsCards, fetching thoughts data
const HappyCards = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-api.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((thoughts) => setThoughts(thoughts))
  }, [])

  // Post likes to the API
  const onLike = (thoughtId) => {
    fetch(`https://happy-thoughts-api.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    }).then(() => updateLikes(thoughtId))
  };

  // Function for updating likes
  const updateLikes = (thoughtId) => {
    // eslint-disable-next-line no-shadow
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedThoughts)
    // The state is changed with the updated thoughts, based on new number of likes
  };

  /* Returning section with key=id, message, hearts
  (nr of likes) and time created for each thought from the API */
  return (

    <>
      <Form setThoughts={setThoughts} />

      <div className="container">

        {thoughts.map((thought) => (
          <section className="thought-box" key={thought._id} thought={thought} onLike={onLike}>
            <p className="message">
              {thought.message}

            </p>

            <div className="likes-container">
              <button
                className={(thought.hearts === 0 ? 'heart-btn' : 'heart-btn red-heart-btn')}
                onClick={() => onLike(thought._id)}>

                <span role="img" aria-label="heart icon" className="heart-icon">❤️</span>

              </button>
              <p className="likes">x {thought.hearts}</p>

              <p className="date-text">
                {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
              </p>
            </div>

          </section>
        ))}
      </div>
    </>
  )
}

export default HappyCards