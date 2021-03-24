import React, { useState, useEffect } from 'react'

import MessageList from './components/MessageList'
import Header from './components/Header'
import MessageForm from 'components/MessageForm'

import { API_URL, API_LIKES} from './reusable/urls'

export const App = () => {

  const [newMessage, setNewMessage] = useState('')
  const [MessageListArray, setMessageListArray] = useState([])

  useEffect(() => {
    fetchMessageList();
  }, [])


  //FIRST FETCH OF MESSAGE LIST
  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(messages => setMessageListArray(messages))
    .catch(err => console.log(err));
  }

  const newMessageChange = (event) =>{
    setNewMessage(event.target.value);
  }


 //SECOND FETCH TO POST NEW MESSAGE
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted', newMessage)

    const options = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: newMessage})
    }

    fetch(API_URL, options)
    .then(res => res.json())
    .then(happyMessage => {
      setMessageListArray([happyMessage,...MessageListArray]);setNewMessage("");
    });
  }


 //FETCH AND TO POST AND UPDATE THE LIKES

 const handleMoreLikes = (id) => {
  const options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
  }

   fetch(API_LIKES(id),options)
   .then(res => res.json())
    .then(()=>{
   const NewMessageArray= MessageListArray.map(thought =>{
        if (thought._id === id){
          thought.hearts +=1
        }
        return thought;
      })
      setMessageListArray(NewMessageArray);
    })
   .catch(err => console.log(err));
 }

  return (
    <div className="main">

      <Header />

      <MessageForm
      onFormSubmit={onFormSubmit}
      newMessage={newMessage}
      newMessageChange={newMessageChange}
      />

      <MessageList
        MessageListArray={MessageListArray}
        handleMoreLikes={handleMoreLikes}
      />

    </div>
  )
}
