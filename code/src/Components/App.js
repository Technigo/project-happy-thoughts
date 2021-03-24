import React, { useState, useEffect } from 'react'
import moment from 'moment'
import ThoughtsFetched from './ThoughtsFetched'
import PostingForm from './PostingForm'

//TO-DO:
//[_] Rename newMessage to newThought etc. for consistency


export const App = () => {

  //------------------ STATE PROPERTIES ------------------

  //testing using dummy fetch:
  const [latestThoughts, setLatestThoughts] = useState([])
  const [newMessage, setNewMessage] = useState("")

  //MOVE THIS SOON:
  const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

  //onChange functions
  const onNewMessageChange = (event) => {
    console.log(`inside PostingForm: ${event.target.value}`)
    setNewMessage(event.target.value)
  }

  useEffect (() => {
    fetchMessages()
  }, [])

  const fetchMessages = () => {
    console.log(newMessage)
    fetch(url, {
      method: 'GET'}
    )
    .then(res => res.json())
    .then(messages => setLatestThoughts(messages))
    .catch(err => console.log(err))
  }

  const submitThought = (event) => {
    event.preventDefault()
    //console.log(event.target.value)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    }

    fetch(url, options)
      .then(res => res.json())
      .then(returnedMessage => setLatestThoughts([returnedMessage, ...latestThoughts]))
      .catch(err => console.log(err))

    setNewMessage('')
  }
  
  
  
  //real default state:
  //const [latestThoughts, setLatestThoughts] = useState([])

  return (
    <>
      <PostingForm 
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        send={submitThought}
      />
      <ThoughtsFetched 
        latestThoughts={latestThoughts}
      />
    </>
  )

  

}



//a dummy fetch of the thoughts
const testThoughts = [
  {
    "_id": "5dd671c864cc480017f40979",
    "message": "I'm happy because we're starting a fun new project",
    "hearts": 0,
    "createdAt": "2018-11-21T11:15:20.888Z",
    "__v": 0
  },
  {
    "_id": "5dd6759064cc480017f4097a",
    "message": "I just ate a super tasty lunch",
    "hearts": 0,
    "createdAt": "2019-11-21T11:31:28.547Z",
    "__v": 0
  }
]

  
