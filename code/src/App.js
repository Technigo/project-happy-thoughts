import React, {useState, useEffect} from 'react';
import { HappyThoughts } from './Components/HappyThoughts';
import { HappyForm } from './Components/HappyForm';

const url = "https://sara-happythought.herokuapp.com/"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState("")

  useEffect (() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = message => {
    fetch(url,{
      method:"POST",
      body:JSON.stringify({message}),
      headers:{"Content-Type":"application/json"}
    })
    .then(() => setPostedMessage(message))
    .catch(err => console.log("error:", err))
  }

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId){
        thought.hearts += 1
      }
    return thought
  })
  setThoughts(updatedThoughts)
  }
  return (
    <main>
      <HappyForm onFormSubmit ={handleFormSubmit} />
      {thoughts.map(thoughts => (
        <HappyThoughts key={thoughts._id} thought={thoughts} onLiked={onLiked} />
      ))}
    </main>
  )

}