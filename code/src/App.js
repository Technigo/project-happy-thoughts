import moment from 'moment';
import React, { useState, useEffect } from 'react';
import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

// import{ Form } from './Components/Form';
import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        console.log(messages);
        setMessageList(messages)
      })
      .catch(err => console.error(err));
  }

  const onNewMessageChange = (event) => {
    console.log(event.target.value);
    setNewMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      {/* <Form /> */}
        <form 
          className="new-message-form" 
          onSubmit={onFormSubmit}
        >
          <label
            htmlFor="newMessage">
            Post your thought!
          </label>
          <textarea 
            id="newMessage"
            rows="2" 
            cols="1"
            value={newMessage}
            type="text"
              onChange={onNewMessageChange}
              className="new-message-input"
          ></textarea>
          <button 
            className="submit-btn" 
            type="submit"
            >❤️ Send happy thought! ❤️
          </button>
        </form>
        {messageList.map(message => (
          <div 
            className="thought-div"
            key={message._id}
          >
            <h4>{message.message}</h4>
            <div className="heart-time-div">
              <div className="likes"> 
                <button className={message.hearts > 0 ? "multiple-hearts" : "heart"}><FontAwesomeIcon icon={['fa', 'heart']} /></button>
                <p>
                  x {message.hearts}
                </p>
              </div>
              <p>{moment(message.createdAt).fromNow()}</p>
            </div>
          </div> 
        ))}
      </div>
  )
}
