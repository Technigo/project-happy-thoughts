/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { MessageDisplay } from './components/MessageDisplay'
import { PostMessage } from './components/PostMessage'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  // FETCH MESSAGES-FUNCTION: used for fetching messages
  // 1st fetch request included in this function
  const fetchMessages = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((result) => result.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // USE EFFECT that calls the function fetchMessages when component mounts. Empty array makes it only be called once.
  useEffect(() => {
    fetchMessages();
  }, []);

  // HANDLE NEW MESSAGE-FUNCTION - gets the value that the user have entered
  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
  }
  // ON FORM SUBMIT-FUNCTION Prevents the form from refreshing the page, sends data to the API with selected options. This happens everytime a user submits a new message.
  const onFormSubmit = (event) => {
    event.preventDefault();

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
  }

  // LIKEINCREASE-FUNCTION
  const LikeCounter = (LikeID) => {
    // options-object decides how changes in the API should look
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // 2nd fetch-request
    fetch(`https://project-happy-thoughts-api-7irwn4hbpa-lz.a.run.app/thoughts/${LikeID}/like`, options)
      .then((result) => result.json())
      .then(() => fetchMessages())
      .catch((error) => console.error(error))
  }

  // RETURN-SECTION HERE (Mounting the components)
  return (
    <div className="happy-thoughts-box">
      <PostMessage
        newMessage={newMessage}
        onFormSubmit={onFormSubmit}
        handleNewMessage={handleNewMessage} />
      <div>
        <MessageDisplay
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList}
          LikeCounter={LikeCounter} />

      </div>
    </div>
  );
}
