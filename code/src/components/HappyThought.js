/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { THOUGHTS_URL } from '../App';
import './HappyThought.css'

export const HappyThought = () => {
  const [thoughts, setThoughts] = useState(null)

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((thought) => thought.text !== '')
        setThoughts(filteredData)
      })
  }, [])

  const handleClick = (id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST'
    })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    thoughts && thoughts.map((thought) => (
      <div className="card-wrap">
        <div key={thought._id} className="happy-thought">
          <h3 className="thought">
            {thought.message}
          </h3>
          <div className="card-footer">
            <p>
              <button
                type="button"
                onClick={() => handleClick(thought._id)}
                style={{ background: thought.hearts > 0 ? '#ffadad' : '#f3f1f1' }}
                className="heart-button">
                <span role="img" aria-label="Heart">❤️</span>
              </button>
            x {thought.hearts}
            </p>
            <p>{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
    ))
  )
}
