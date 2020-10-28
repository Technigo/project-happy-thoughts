import React, { useState } from 'react'
import { useEffect } from 'react'

import { ThoughtsHeader } from './Components/ThoughtsHeader.js'
import { ThoughtsMessage } from './Components/ThoughtsMessage.js'
import { ThoughtsForm } from './Components/ThoughtsForm.js'

export const App = () => {

  const apiUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

/* Fetching data from the Happy thoughts API
Passing the data, an array of 20 object elements, to the setMessages function which in turn passes it tp the messages state variable 
to the messages */
/*What is the useEffect used for? */
  useEffect(() => {
    fetch(apiUrl)
      .then((apiData) => {
        return apiData.json()
      })
        .then((data) => {
          setMessages(data);
        });
  }, []);

  const onLiked = messageId => {
    const updatedMessage = messages.map(thought => {
      if (thought._id === messageId) {
        thought.hearts += 1
      }
      return thought    
    })
    setMessages(updatedMessage)
  }

  return (
  <main>
    <ThoughtsHeader />
    <ThoughtsForm apiURL={apiUrl} />
    {/* Mapping through the array data that's in the messages state variable so each array element is returned via the messageDetails argument and prop to the ThoughtsMessage component */}
    {messages.map((messageObject) => (
      <ThoughtsMessage key={messageObject._id} messageDetails={messageObject} onLiked={onLiked}/>
    ))}
  </main>
  )
}
