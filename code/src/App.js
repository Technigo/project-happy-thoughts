import React, {useEffect, useState}  from 'react'
import { HappyForm } from './components/HappyForm'
import { Happythoughts } from './components/Happythoughts'

const url = 'https://technigo-thoughts.herokuapp.com/'


export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setThoughts(json))
  },  [postedMessage])

  const handleFromSubmit = message => {
    setPostedMessage(message)
  }
  
  const onLiked = thoughtId => {
    console.log('Looging in the APP.js', thoughtId)
  
  const updatedThoughts = thoughts.map(thought => {
    if( thought._id === thoughtId) {
      thought.hearts += 1
    }
    return thought
  })
  setThoughts(updatedThoughts)
}

return (
    <main>


      <HappyForm handleFromSubmit={handleFromSubmit}/>

      {thoughts.map(thought => (

      <Happythoughts key={thought._id} thought={thought} onLiked={onLiked}/> 
      ))}


    </main>
  )
}
