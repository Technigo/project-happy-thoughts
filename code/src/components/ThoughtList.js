import React, { useEffect, useState } from 'react';

import { ThoughtMessage } from './ThoughtMessage'

export const ThoughtList = () => {
  const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    /* use useeffects to fetch messages from backend */
    fetch(THOUGHTS_URL)
    .then((res)=>{
        return res.json()
    }).then(data => {
      const filteredData = data.filter(thought => {
        return thought.message !== ""
      })
      setThoughts(filteredData) /* filteredData is an array of messages */
      })
  }, [])

  const onLikeThought = (likeId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likeId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>
      {thoughts.map(thought=> 
        <ThoughtMessage
          key={thought._id}
          message={thought.message}
          time={thought.createdAt}
          likes={thought.hearts}
          id={thought._id}
          handleLikeThought={onLikeThought}
        />
      )}        
    </div>
  )
}