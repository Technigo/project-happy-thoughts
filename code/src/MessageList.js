import React, {useState, useEffect} from 'react'
import moment from 'moment'
import {Message} from './Message'
import { tsPropertySignature } from '@babel/types'
import {LikeButton} from './LikeButton'

export const MessageList = () => {
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"
  const [messages, setMessages] = useState([])
  const [postedMessage, setPostedMessage] =("")

  useEffect (() => {
    fetch("MESSAGE_URL")
    .then(res => res.json())
    .then(json => setMessages(json))
  
    }, [postedMessage])
      
      const onFormSubmit = message => {
      setPostedMessage(message)
    }
    const onMessageLiked = (likedMessageId) => {

    const updatedMessages = messages.map ((message) =>{
      if (message._id === likedMessageId) {
        messages.hearts +=1
      }
      return message
    })
    setMessages(updatedMessages)
  }


    return (
    <div>
      <MessageList onFormSubmit={onFormSubmit} />
        {messages.map((message) => (
        <Message
          key={message._id}
          message={message}
          onMessageLiked={onMessageLiked} />
          ))}
    </div>
  )
}

// return (
// <div>
// {
//   messages.map (message => (
//     <p>{message.message} ❤️x{message.hearts}{moment(message.createdAt).fromNow()}</p>
//   ))
// }

//     </div>
    
//   )
  
// }
