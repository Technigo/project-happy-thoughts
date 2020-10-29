import React, {useState, useEffect} from 'react'

import {ThoughtList} from './components/ThoughtList'
import {NewThought} from 'components/NewThought'

export const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    
  const fetchThoughts = () => {
    fetch(ThoughtsURL)
    .then (response => response.json())
    .then ((thoughts) => {
        console.log(thoughts)
        setMessages(thoughts)
    })
  }
    
  useEffect(() => {
    fetchThoughts();
  }, []);

  const postThought = (newThought) => {
    fetch(ThoughtsURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: newThought})
    }).then(() => fetchThoughts())
  }

  const onThoughtSubmit = (event) => {
    event.preventDefault();
    console.log(newMessage);
    postThought(newMessage)
  }

  const handleLike = () => {
    fetchThoughts()
  }

  return (
    <section className="thought-list">
      <NewThought 
        newThought={newMessage} 
        setNewThought={setNewMessage} 
        handleSubmit={onThoughtSubmit}/>
      
      <ThoughtList messageList={messages} onLike={handleLike}/>
      
    </section>
  )
}
