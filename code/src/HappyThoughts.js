import React, { useState, useEffect } from 'react'
import { LikeHeart } from "./LikeHeart"

import './HappyThoughts.css'
import moment from 'moment'


export const HappyThoughts = () => {
  const THOUGHTS_URL = "https://anna-happythoughts.herokuapp.com/"

  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.heart += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>
      {thoughts.map(thought => (
        <article className="thoughts-container" key={thought._id}>
          <h2>{thought.message}</h2>
          <p>/{thought.name}</p>
          <div className="thought-info">
            <LikeHeart
              key={thought._id}
              id={thought._id}
              onThoughtLiked={onThoughtLiked}
              hearts={thought.heart} />
            <span className="message-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </div>
        </article>
      ))
      }
    </div>
  )
}
