import React, {useState, useEffect} from 'react'

import {ThoughtList} from './components/ThoughtList'
import {NewThought} from 'components/NewThought'
import {Loading} from './components/Loading'


export const App = () => {
  // All states 
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(true)

  const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  
  //Fetches existing thoughts from API and removes the loader when done
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

  //Posts a new thought from component NewThought to API (and catch the errors)
  const postThought = (event) => {
    event.preventDefault();
    setLoading(true)
    
    fetch(ThoughtsURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: newMessage})
    })
    .then (response => response.json())
    .then((message) => {
      if (message.errors) {
        handleError(message)
      } 
      else {
        setErrorMessage('') //removes the error text
        setNewMessage(''); //resets the textarea input
      }
      fetchThoughts()
    })
  }

  //Handles the errors from POST fetch and displays a message
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
        handleSubmit={postThought}
        errorMessage={errorMessage}/>
      
      {/* Shows loading animation if loading state is set to True */}
      {loading && <Loading />} 

      <ThoughtList 
        messageList={messages} 
        onLike={()=>fetchThoughts()}/>

    </section>
  )
}
