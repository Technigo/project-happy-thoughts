import React, { useEffect, useState } from 'react'

import { HappyThought } from 'components/HappyThought'
import { HappyForm } from 'components/HappyForm';

const url= "https://happy-thoughts-claudia.herokuapp.com/thoughts"
//"https://happy-thoughts-technigo.herokuapp.com/thoughts"


export const App = () => {
  const [thoughts, setThoughts] = useState ([])
  const [postedMessage, setPostedMessage] = useState ("")

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const onFormSubmit = message => {
    setPostedMessage(message)
  }

  const onLiked = thoughtId => {

    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts +=1
      }
      return thought 
    })
    setThoughts(updatedThoughts)
  }

  return (
  <main>
    <HappyForm onFormSubmit={onFormSubmit} />
    {thoughts.map(thought => (
      <HappyThought key={thought._id} thought={thought} onLiked={onLiked} />
    ))}
  </main>
  )
}

