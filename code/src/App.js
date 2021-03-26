import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { ToastContainer, toast } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import { useSpring, animated as a } from "react-spring";
import { API_URL } from './reusable/urls'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'
import LikeButton from './components/LikeButton'
import Loading from './components/Loading'


export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  /* const [greetingStatus, displayGreeting] = useState(false);

  const contentProps = useSpring({
    opacity: greetingStatus ? 1 : 0,
    marginTop: greetingStatus ? 0 : -500
  }) */
   
  useEffect(() => {
    fetchMessageList()
    
    setTimeout(() => { //Setting time for the loader to stop 
      setIsLoading(false)
    }, 1500)
  }, []) 

  const fetchMessageList = () => {
    fetch (API_URL)
      .then(res => res.json ())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify({ message: messageNew })
    }
    fetch (API_URL, options) 
      .then (res => {
        if (res.status === 201) { //Catching the error with status: 201 
          return res.json()
        } else {
          throw new Error 
            ('Something went wrong! 🤯 Please enter more than 5 characters and try again.')
        }
      })
      .then (receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch((err) => {
         //adds notification snackbar, makes it look better than an regular alert message
        toast.error(err.message, {
          position: "top-left"
        })
      })
  }  

  const onMessageLiked = (likedMessageID) => {
    const updateMessages = messageList.map((message) => {
      if (message._id === likedMessageID) {
        message.hearts += 1
      }
      return message
    })
    setMessageList(updateMessages)
  }

  return (
    <section className="tought-card">
      {isLoading === true ? 
        <Loading/> : 
        <div>
        <ToastContainer />          
        <MessageForm 
          onSubmit={onFormSubmit} 
          messageNew={messageNew} 
          setMessageNew={setMessageNew} 
        /> 
      {messageList.map(tought => (
        <div className="tought-message" key={tought._id}>
          <MessageList 
            message = {tought.message} 
          />
          <LikeButton 
            id={tought._id}
            message = {tought}
            heart = {tought.hearts}
            onMessageLiked = {onMessageLiked}
            time = {moment(tought.createdAt).fromNow()}
          />
        </div>
      ))}
      </div> 
      }
    </section>
  )
}
