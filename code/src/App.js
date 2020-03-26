import React, {useEffect, useState}  from 'react'
import { HappyForm } from './components/HappyForm'
import { Happythoughts } from './components/Happythoughts'

const url = 'https://technigo-thoughts.herokuapp.com/'


export const App = () => {

  const [thoughts, setThoughts] = useState([])
  const [submitMessage, setSumbitMessage] = useState('')

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setThoughts(json))
  },  [submitMessage])

  const onFromSubmit = message => {
    setSumbitMessage(message)

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


      <HappyForm />
      
      {thoughts.map(thought => (

      <Happythoughts key={thought._id} thought={thought} onLiked={onLiked}/> 
      ))}



    </main>
  )
}
