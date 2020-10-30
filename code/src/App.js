import React, {useState, useEffect} from 'react'

import {ThoughtList} from './components/ThoughtList'
import {NewThought} from 'components/NewThought'
import {Loading} from './components/Loading'

export const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    
  const fetchThoughts = () => {
    fetch(ThoughtsURL)
    .then (response => response.json())
    .then ((thoughts) => {
        setLoading(false)
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
    })
    .then (response => response.json())
    .then((message) => {
      if (message.errors) {
        setErrorMessage(message.message)
      } 
      else {
        setErrorMessage('')
        setNewMessage('');
        setLoading(true)
      }
    
      fetchThoughts()
      
    })
  }

 
  const onThoughtSubmit = (event) => {
    event.preventDefault();
    console.log(newMessage);
    postThought(newMessage);
  }

  const handleLike = () => {
    fetchThoughts()
  }

  return (
    <section className="thought-list">
      
      <NewThought 
        newThought={newMessage} 
        setNewThought={setNewMessage} 
        handleSubmit={onThoughtSubmit}
        errorMessage={errorMessage}/>
      
      {loading && <Loading />}

      <ThoughtList messageList={messages} onLike={handleLike}/>
      
    </section>
  )
}
