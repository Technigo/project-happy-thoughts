/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { MessageDisplay } from './components/MessageDisplay/MessageDisplay.js'
import { PostMessage } from './components/PostMessage/PostMessage'
import { Loading } from './components/Loading/Loading'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  const [messageList, setMessageList] = useState([]) // Keeps track of the list of messages
  const [loading, setLoading] = useState(false); // used for loading
  const [newMessage, setNewMessage] = useState(''); // keeps track of the user input of new message
  const [latestMessage, setLatestMessage] = useState(null) // helps ypu keep track of the latest message in order to add animation when added

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
      .then((data) => {
        setMessageList([data, ...messageList])
        setLatestMessage(data._id) // this sets the LatestMessage to the latest message using the data._id
      })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false); setNewMessage('') })
  }

  // LIKEINCREASE-FUNCTION
  const LikeCounter = (LikeID) => {
    // options-object decides how changes in the API should look
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // 3rd fetch-request for the likes
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${LikeID}/like`, options)
      .then((result) => result.json())
      .then(() => fetchMessages())
      .catch((error) => console.log(error))
      .finally(() => { setLoading(true) })
  }

  // RETURN-SECTION HERE (Mounting the components)

  return (
    <div>
      {/* the loading-container was added to be able to make the loading page go ontop. */}
      {loading && <div className="loading-container"><Loading /></div>}
      <div className="happy-thoughts-box">
        <PostMessage
          newMessage={newMessage}
          onFormSubmit={onFormSubmit}
          handleNewMessage={handleNewMessage} />
        <div className="message-conatiner">
          <MessageDisplay
            latestMessage={latestMessage}
            messageList={messageList}
            setMessageList={setMessageList}
            LikeCounter={LikeCounter}
            loading={loading} />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
