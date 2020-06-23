import React, {useEffect, useState}  from 'react'
import {MessageList} from './MessageList'
import {PostMessages} from './PostMessages'

const url = 'https://elins-happythoughts-api.herokuapp.com/thoughts/'


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
  
const sendHeart = (id) => {
  const end = `${url}/${id}/like`

fetch(end, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
}).then((res) => res.json())
  .then((updateMessage) => {
    const updatedThoughts = [...thoughts]
    const index = thoughts.findIndex(thought => thought._id === id)
    updatedThoughts.splice(index, 0, updateMessage)
    setPostedMessage(updatedThoughts)
  })
}

return (
    <main>
      <PostMessages handleFromSubmit={handleFromSubmit}/>
      {thoughts.map(thought => (
      <MessageList key={thought._id} thought={thought} onLiked={sendHeart} /> 
      ))}
    </main>
  )
}