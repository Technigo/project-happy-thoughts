/* eslint-disable arrow-parens */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { formatDistance } from 'date-fns'
import Form from '../Form/Form'
import styles from './HappyCards.module.css'

// Creating HappyCards, fetching thoughts data
const HappyCards = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((thoughts) => setThoughts(thoughts))
  }, [])

  // Post likes to the API
  const onLike = (thoughtId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
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

      <div className={styles.container}>

        {thoughts.map(thought => (
          <section
            className={styles.thoughtBox}
            key={thought._id}
            thought={thought}
            onLike={onLike}>
            <p className={styles.message}>
              {thought.message}

            </p>

            <div className={styles.likesContainer}>
              <button
                className={(thought.hearts === 0 ? 'heart-btn' : 'heart-btn red-heart-btn')}
                onClick={() => onLike(thought._id)}>

                <span role="img" aria-label="heart icon" className={styles.heartIcon}>❤️</span>

              </button>
              <p className={styles.likes}>x {thought.hearts}</p>

              <p className={styles.dateText}>
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