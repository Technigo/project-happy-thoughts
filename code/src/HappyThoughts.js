import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'

export const HappyThoughts = () => {

  const [thoughts, setThoughts] = useState([])
  const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then(json => setThoughts(json)
      )
  }, [])

  const onLiked = thoughtId => {
    console.log('Logging in the APP.js', thoughtId)
    // just to check that the func is being called and has the id

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <div>
      {thoughts.map(thought => (
        <section className="thoughtsCard" key={thought._id}>
          <div className="thought">{thought.message}</div>
          <span className="heartSection">
            <LikeButton key={thought._id} thought={thought} onLiked={onLiked} /> {moment(thought.createdAt).fromNow()} </span></section>
      ))
      }
    </div >
  )
}


