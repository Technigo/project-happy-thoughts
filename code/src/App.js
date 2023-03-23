/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { DisplayMessage } from './components/displayMessage/displayMessage.js'
import { PostMessage } from './components/postMessage/postMessage.js'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchMessages();
  }, [])

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    // options that says how the information we send should be added into the API
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }
    // 2nd fetch request within OnFormSubmit
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((result) => result.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''))

    // function to increase the likes
    const LikeCounter = (LikeID) => {
      // options-object decides how changes in the API should look
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${LikeID}/like`, options)
        .then((result) => result.json())
        .then(() => fetchMessages())
        .catch((error) => console.log(error))
        .finally(() => { setLoading(false) })
      return (
        <div className="happy-thoughts-box">
          <PostMessage
            newMessage={newMessage}
            onFormSubmit={onFormSubmit}
            handleNewMessage={handleNewMessage} />
          <div>
            <DisplayMessage
              loading={loading}
              messageList={messageList}
              setMessageList={setMessageList}
              LikeCounter={LikeCounter} />
          </div>
        </div>
      );
    }
  }
}