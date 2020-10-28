import React, { useState, useEffect } from 'react'

import HappyForm from './HappyForm'
import HappyList from './HappyList'

//We put useState in App to be able to compare states between components 
export const App = () => {
//Here I establish connection to the API
  const [messages, setMessages] = useState ([]);
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  
  useEffect (() => {
    fetchMessages();
  }, []);

 //fetch data from the server and adding it to our messages
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
       .then(response => {
         return response.json();
       })
    .then(data => {
      //     //Filter out messages that don't have any text:
           const filteredData = data.filter(message => {
            return message.message; //Change this to newMessage?
           });
      setMessages(filteredData);
//     console.log(data)
   })
   .catch(error => console.error(error))
  }

  const reachHappyForm = (newMessage) => {
    //console.log(newMessage);
    //Post request:
    fetch(MESSAGES_URL, {  
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
      body:JSON.stringify({ message: newMessage })
    }).then(() => fetchMessages()) //After posting new message, we also fetch messages
  }

  return (
    <div>
      <HappyForm onMessageChange={reachHappyForm} />
      <HappyList messageList={messages}/>
    </div>
  )
}
