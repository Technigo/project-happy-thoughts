import React, { useState } from 'react'
import { useEffect } from 'react'

import { ThoughtsHeader } from './Components/ThoughtsHeader.js'
import { ThoughtsMessage } from './Components/ThoughtsMessage.js'
import { ThoughtsForm } from './Components/ThoughtsForm.js'

export const App = () => {

  const apiUrlMessages = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();    
  }, []);

  /* Fetching data from the Happy thoughts API
  Passing the data, an array of 20 object elements, to the setMessages function which in turn passes it to the messages state variable so the data is stored there */
  const fetchMessages = () => {
    fetch(apiUrlMessages)
      .then((apiData) => {
        return apiData.json()
      })
        .then((data) => {
          setMessages(data);
        })
          .catch((error) => {
            console.error(error);
          })
  };  

  /* Created a function, postSingleMessage, which fetches the apiUrl and creates a post request. Then I believe that after this post is done to the api the fetchMessages function is updated with the new posted message */
  const postSingleMessage = newMessage => {
    fetch(apiUrlMessages, 
      {
          method: "POST",
          headers: {
              "content-Type": "application/json"
          },
          body: JSON.stringify({ message: newMessage })
      })
        .then(() => {
          fetchMessages();
        })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          })
  };
    
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
    {/* Sending to the ThoughtsForm component the postSingleMessage function which as I understand it allows for the onChange that changes the neewMessages variable and the onSubmit function in the ThoughtsForm component*/}
    <ThoughtsForm onMessageChange={postSingleMessage} />
    {/* Mapping through the array data that's in the messages state variable so each array element is returned via the messageDetails argument and prop to the ThoughtsMessage component */}
    {messages.map((messageObject) => (
      <ThoughtsMessage key={messageObject._id} messageDetails={messageObject} onLiked={onLiked}/>
    ))}
  </main>
  )
}
