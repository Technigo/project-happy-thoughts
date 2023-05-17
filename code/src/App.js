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
    setLoading(true); // we set the loading to true so that the spinner is visible during the fetch call
    fetch('https://project-happy-thoughts-api-wbm4xjxtua-uc.a.run.app/thoughts') // fetch the api
      .then((result) => result.json()) // return json
      .then((data) => setMessageList(data.response)) // use the data.response (because the response-array is were all the messages are)
      .catch((error) => console.error(error)) // If we get an error, we console-log it.
      .finally(() => setLoading(false)); // the fetch call is done so we set the loading state to false.
  }

  // USE EFFECT that calls the function fetchMessages when component mounts. Empty array makes it only be called once.
  useEffect(() => {
    fetchMessages();
  }, []);

  // HANDLE NEW MESSAGE-FUNCTION - gets the value that the user have entered
  const handleNewMessage = (event) => {
    setNewMessage(event.target.value) // we listen to the new message that the user is typing and set that message as the newMessage.
  }
  // ON FORM SUBMIT-FUNCTION that listens to the button-click event in the PostMessageComponent
  const onFormSubmit = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page, sends data to the API with selected options. This happens everytime a user submits a new message.

    // options that says how the information we send should be added into the API
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage,
        createdAt: new Date().toISOString() // Include the createdAt field with the current timestamp
      })
    }
    // 2nd fetch request within OnFormSubmit
    fetch('https://project-happy-thoughts-api-wbm4xjxtua-uc.a.run.app/thoughts', options)
      .then((result) => result.json())
      .then((data) => {
        if (data.success) {
          setMessageList([data.response, ...messageList])
          setLatestMessage(data.response._id) // this sets the LatestMessage to the latest message using the data._id
        } else {
          console.error(data.message)
        }
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
    fetch(`https://project-happy-thoughts-api-wbm4xjxtua-uc.a.run.app/thoughts/${LikeID}/like`, options)
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
