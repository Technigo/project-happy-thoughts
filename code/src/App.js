//Outer dependencies
import React, { useState, useEffect} from 'react'

//Local dependencies 
import  MessageForm  from "./components/MessageForm"
import MessageList from "./components/MessageList"

import { API_URL, API_URL_LIKES } from './reusable/url'


export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, []) // If it should always be called we do not set a second argument with a comma , 

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  }

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    setNewMessage('') //empty textarea after submit

    fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    })
    .then((res) => res.json ()) //what happens in this section? how is it making real time after submit
    .then((messageList) =>{
      setMessageList((previousMessage) => [messageList, ...previousMessage])
    })
  }

  const handleHeartLikeIncrease = (id) => {
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      } 
    };
       fetch(API_URL_LIKES(id), (options))
        .then(res => res.json())
        .then(receivedMessage => { //newest  received from server updated with likes
          const refreshedMessageList = messageList.map(thought => {
            if (thought._id === receivedMessage._id) {
              thought.hearts += 1
            } 
            return thought //isnt thought and refreshedMessageList the same here?
          })
          setMessageList(refreshedMessageList)
       })   
        .catch(error => alert('Try typing less or more characters (min 5, max 140)', error))  
  }


  return (
    <div className="message-wrapper">
      <MessageForm 
        newMessage= {newMessage}
        onNewMessageChange= {handleNewMessageChange} //when child component passed to function in App, change on to handle. 
        onFormSubmit ={handleFormSubmit}
      />
      <MessageList 
        handleHeartLikeIncrease= {handleHeartLikeIncrease}
        messageList= {messageList}
      />
    </div>
    
  )
}
