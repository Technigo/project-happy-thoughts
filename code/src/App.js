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
  const [username, setUsername] = useState('')
  const [tags, setTags] = useState()

  //const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const ThoughtsURL= "https://sharing-happy-thoughts.herokuapp.com/thoughts"
  //const ThoughtsURL= "http://localhost:8080/thoughts"
  
  
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

  //Fetches existing thoughts from API tagged with named parameter
  const fetchTagsThoughts = (tag) => {
    fetch(`${ThoughtsURL}/${tag}`)
    .then (response => response.json())
    .then ((thoughts) => {
        setLoading(false)
        setMessages(thoughts)
    })
  }

  //Posts a new thought from component NewThought to API (and catch the errors)
  const postThought = (event) => {
    event.preventDefault();
    setLoading(true)
    let trimmedTagsArray = []
    if (tags) {
      const tagsArray = tags.split(',')
      trimmedTagsArray = tagsArray.map(tag => tag.trim())
    } else {
      trimmedTagsArray = []
    }
    
    fetch(ThoughtsURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: newMessage, username: username, tags: trimmedTagsArray})
    })
    .then (response => response.json())
    .then((message) => {
      if (message.errors) {
        handleError(message)
      } 
      else {
        setErrorMessage('') //removes the error text
        setNewMessage('') //resets the textarea input
        setUsername('')
        setTags('')
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
      setErrorMessage('Please write min 5 characters')
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
        errorMessage={errorMessage}
        username={username}
        setUsername={setUsername}
        tags={tags}
        setTags={setTags}/>
      
      {/* Shows loading animation if loading state is set to True */}
      {loading && <Loading />} 

    {(messages.length > 0) &&
      <ThoughtList 
        messageList={messages} 
        onLike={()=>fetchThoughts()}
        fetchTagsThoughts = {fetchTagsThoughts}/>
      }

    </section>
  )
}
