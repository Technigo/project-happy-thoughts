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
    setLoading(true)
    
    fetch(ThoughtsURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: newThought})
    })
    .then (response => response.json())
    .then((message) => {
      if (message.errors) {
        handleError(message)
        
      } 
      else {
        setErrorMessage('')
        setNewMessage('');
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

  const handleError = (error) => {
    const errorKind = error.errors.message.kind
    if (errorKind === 'required') {
    setErrorMessage('Please write your thought')
    } else if (errorKind === 'minlength') {
      setErrorMessage('Your thought needs at least 5 character')
    } else if (errorKind === 'maxlength') {
      setErrorMessage('Oops a bit to long')
    } else {
      setErrorMessage(error.message)
    }
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
