import React, { useState, useEffect } from 'react'
import { MyThought } from './MyThought'
import { Thought } from './Thought'


export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [myThought, setMyThought] = useState('')


  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [])

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>

      <MyThought
        myThought={myThought}
        setMyThought={setMyThought}
        setThoughts={setThoughts}
      />

      {thoughts.map((thought) => (
        <div className="thoughts-card">
          <Thought
            key={thought._id}
            thought={thought}
            onThoughtLiked={onThoughtLiked} />
        </div>
      ))}

    </div>
  )
}



