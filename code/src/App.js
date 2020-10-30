import React, { useState, useEffect } from 'react'

import { ThoughtsHeader } from './Components/ThoughtsHeader.js'
import { ThoughtsMessage } from './Components/ThoughtsMessage.js'
import { ThoughtsForm } from './Components/ThoughtsForm.js'
import { ThoughtsFooter } from './Components/ThoughtsFooter.js'

export const App = () => {

  const apiUrlMessages = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  const [messages, setMessages] = useState([]);

  /* Using the useEffect to call the function that contains the api fetch */
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

  /* Created a function, postSingleMessage, which fetches the apiUrl and creates a post request. After the post is done the fetchMessages function is called again, doing a new fetch from the api, for our browser to show the api with the updated messages submitted since the last fetch */
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
  };

  /*PostHearts function is taking the message id's that have had the heart button clicked. Then posting this new information to the api and updating the hearts object property with the amount of new clicks of the button. 
  
  We can use onLiked function to show that the hearts count has been updated for specific messages in the browser e.g. on the frontend / client side / local side. As this updates the messages state by way of the setMessages function.
  
  However we can also omit this if we want to just do a new fetch from the api as to fetch the updated data on the api which will also show these new hearts/likes. This is done by calling the fetchMesssages function again which houses the fetch from the api */
  const postHearts = messageId => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
            method: "POST", 
            headers: { "Content-Type": "application/json" }
        }).then (() => {
            onLiked(messageId);
            fetchMessages();
        });
  };

  const onLiked = messageId => {
    const updatedMessage = messages.map(thought => {
      if (thought._id === messageId) {
        thought.hearts += 1
      }
      return thought    
    })
    setMessages(updatedMessage)
  };

  return (
  <main>
    <ThoughtsHeader />
    {/* Sending to the ThoughtsForm component the postSingleMessage function which as I understand it allows for the onChange that changes the neewMessages variable and the onSubmit function in the ThoughtsForm component*/}
    <ThoughtsForm onMessageChange={postSingleMessage} />
    {/* Mapping through the array data that's in the messages state variable so each array element is returned via the messageDetails argument and prop to the ThoughtsMessage component */}
    {messages.map((messageObject) => (
      <ThoughtsMessage key={messageObject._id} messageDetails={messageObject} onHeartsChange={postHearts}/>
    ))}
    <ThoughtsFooter />
  </main>
  )
}
