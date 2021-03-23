import moment from 'moment';
import React, { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import{ Form } from './Components/Form';
import { API_URL } from './reusable/urls';
// const heart = <FontAwesomeIcon icon={faHeart} />

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
    setNewMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* <Form /> */}
        <form className="new-message-form" htmlFor="newMessage" onSubmit={onFormSubmit}>
          <input
            id="newMessage"
            type="text"
            value={newMessage}
            onChange={onNewMessageChange}
            className="new-message-input"
          />
          <button className="submit-btn" type="submit">Post message!</button>
        </form>
        {messageList.map(message => (
          <div className="thought-div" key={message._id}>
            <h4>{message.message}</h4>
            <p>
              {/* <span>{heart}</span> */}
              {message.hearts}
            </p>
            <p>{moment(message.createdAt).fromNow()}</p>
          </div> 
        ))}
      </div>
  )
}
