import React, { useState, useEffect } from 'react'
import { HeartButton } from 'Components/HeartButton'
import TimeAgo from 'timeago-react'

import './thoughts.css'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  const MESSAGES_URL = 'https://ragna-happy-thoughts.herokuapp.com/'

  useEffect(() => {
    fetch(MESSAGES_URL,{method: 'GET'})    
    .then(res => res.json())
    .then(json => setThoughts(json))
  },[])

  const onThoughtLiked = likedThoughtId => {
    const updatedThoughts = thoughts.map((thought) => {
      if(thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>
      <article>
        {thoughts.map(thought => (
          <div key={thought._id} className='thoughts-card'>
            <p>{thought.message}</p>
            <div className='hearts-time-container'>
              <HeartButton hearts={thought.hearts} id={thought._id} onThoughtLiked={onThoughtLiked} />
              <TimeAgo className='time-style' datetime={thought.createdAt} />
            </div>
            
          </div>
          
        ))}

        
      </article>
    </div>
  )
}