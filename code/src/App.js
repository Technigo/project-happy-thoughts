import React, { useState, useEffect } from 'react'

import HappyForm from './HappyForm'
import HappyList from './HappyList'

//I put useState in App to be able to compare states between components 
export const App = () => {
  //Here I establish connection to the API
  //Create state for messages
  const [messages, setMessages] = useState([]);
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  // Use useEffect to fetch messages from backend 
  //( = a function that triggers when state changes occur, and then a re-render is performed)
  //use effects accepts a function as the first argument, and an array of dependencies 
  //as a second argument, so adding an empty array as a second argument means that 
  //it will run when the component loads the first time.
  useEffect(() => {
    fetchMessages();
  }, []);

  //fetch GET data from the server and adding it to our messages:
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then(response => {
        return response.json();
      })
      //Set the state (data is an array of messeges):
      .then(data => {
        //Filter out messages that don't have any text:
        const filteredData = data.filter(message => {
          return message.message;
        })
        setMessages(filteredData);
      })
      .catch(error => console.error(error))
  };
  //fetch POST message (reach HappyForm):
  const postHappyMessage = (newMessage) => {
    //Post request:
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    })
      .then(() => fetchMessages()) //After posting new message, we also fetch messages.
      .catch(error => console.error(error)) //Should this be here?
  };

  //fetch POST HappyLike:
  const postThoughtLike = id => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => fetchMessages()) //What is the difference between writing like this and just: .then(fetchMessages())?
  };

  return (
    <div className="app-wrapper">
      <HappyForm onMessageChange={postHappyMessage} />
      <HappyList messageList={messages} handleThoughtLike={postThoughtLike} />
    </div>
  );
};
