/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */

import React, { useState, useEffect } from 'react'
import { formatDistance } from 'date-fns'
import Form from '../Form/Form'
import styles from './HappyCards.module.css'

const HappyCards = ({ thought }) => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((thoughts) => setThoughts(thoughts))
  }, [])

  const updateLikes = (thoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedThoughts)
  };

  const like = (thoughtId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    }).then(() => updateLikes(thoughtId))
  };

  return (
    <>
      <Form setThoughts={setThoughts} />

      <div className={styles.thoughtContainer}>

        {thoughts.map((thought) => (
          <section
            className={styles.thoughtBox}
            key={thought._id}>
            <p className={styles.message}>
              {thought.message}

            </p>

            <div className={styles.likesContainer}>
              <div className={styles.likeSection}>
                <button
                  className={(thought.hearts === 0 ? styles.button : styles.heartBtn)}
                  onClick={() => like(thought._id)}>
                  <span role="img" aria-label="heart icon" className={styles.heartIcon}>❤️</span>
                </button>

                <p className={styles.likes}>x {thought.hearts}</p>
              </div>
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