import React, { useState, useEffect } from 'react'

import { API_URL, LIKE_URL, DELETE_URL } from './reusable/urls'
import { Form } from './components/Form'
import MessageList from './components/MessageList'
import ErrorMessage from './components/ErrorMessage'
import Header from './components/Header'
import Footer from './components/Footer'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState ('')
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(messages => setMessageList(messages))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(API_URL, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error ('Something went wrong!')
      }
    })
    // .then((receivedMessage) => {
    //   setMessageList([receivedMessage, ...messageList])
    //   setMessageNew('')
    // })
    .then(
      fetchMessageList,
      setMessageNew('')
      )
    .catch(() => {
      setErrorMessage(true);
  })
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKE_URL(id), options)
    .then(response => response.json()) 
    .then(receivedMessage => {
      const updatedMessageList = messageList.map(message => {
        if (message._id === receivedMessage._id) {
        message.hearts +=1;
        }
        return message;
      })
      setMessageList(updatedMessageList)
      }) 
    }

    // Handle delete
    const handleClickDelete = (id) => {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      fetch(DELETE_URL(id), options)
        .then(response => response.json())
        .then(deletedMessage => {
          const updatedList = messageList.filter((item) => item._id !== deletedMessage._id)
          setMessageList(updatedList)
        })
    }
    
  return (
    <div className='app-container'> 
        <div>
          <Header />
          <Form  
            messageNew={messageNew} 
            setMessageNew={setMessageNew} 
            onFormSubmit={handleFormSubmit}
          />
          {errorMessage && <ErrorMessage setErrorMessage={setErrorMessage} />}
          <div>
          <MessageList 
              handleLikesIncrease={handleLikesIncrease} 
              messageList={messageList} 
              handleClickDelete={handleClickDelete}
          />
          </div>
        </div>
        <Footer />
    </div>
  )
}
