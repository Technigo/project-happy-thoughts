import React, { useState, useEffect } from 'react';
import { LikeButton } from './LikeButton';
import moment from 'moment';
import './HappyThoughts.css';


export const HappyThoughts = (thought) => {
  const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [thoughts, setThoughts] = useState([]);
  

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data.reverse()))
      .catch(error => console.error(error));
  }, [])

  const onLikedThought = (likedThoughtId) => {
    const thoughtsUpdated = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.like += 1
      }
      return thought
    })
    setThoughts(thoughtsUpdated)
  }

  return (
    <div>
      {thoughts.map(thought => (
          <div className='happy-thoughts' key={thought._id}>
            <h2 className="thought-message">{thought.message}</h2>
            <div className="thought-info">
              <LikeButton
                key={thought._id}
                id={thought._id}
                onLikedThought={onLikedThought}
                likes={thought.like}
              />
              <span className='thoughts-time'>
                {moment(thought.createdAt).fromNow()}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}