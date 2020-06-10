import React, {useEffect, useState}  from 'react'
import { HappyForm } from './components/HappyForm'
import { Happythoughts } from './components/Happythoughts'

const url = 'https://ebbabw-project-happy-thoughts.herokuapp.com/thoughts'


export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => setPostedMessage(message))
  }

  const onLiked = (likedThoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.heart += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }


return (
    <main>


      <HappyForm handleFormSubmit={handleFormSubmit}/>

      {thoughts.map(thought => (

      <Happythoughts key={thought._id} thought={thought} onLiked={onLiked} /> 
      ))}


    </main>
  )
}
