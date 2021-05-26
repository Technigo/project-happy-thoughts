import React, { useState, useEffect } from 'react';

import { HAPPY_THOUGHTS_URL, HEARTS_URL } from './reusable/urls';

import MessageForm from 'components/MessageForm';
import MessageList from 'components/MessageList';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState(['']);

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(res => res.json())
      .then(inputs => setMessageList(inputs))
  }

  const handleMessageNewChange = (e) => {
    setMessageNew(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })
    }

    fetch(HAPPY_THOUGHTS_URL, options)
      .then(res => res.json())
      .then(recievedMessage => setMessageList([...messageList, recievedMessage]))

// set empty string here. Update value of a state property
      e.target.reset()
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch(HEARTS_URL(_id), options)
      .then(res => res.json())
      //fetch data
      .then(recievedMessage => {
        const updatedMessageList = messageList.map(input => {
          if (input._id === recievedMessage._id) {
            input.hearts += 1;
          } 
          return input;
        });
        setMessageList(updatedMessageList);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="message-container">
      <section class="message-section">
        <MessageForm 
          messageNew={messageNew}
          onMessageNewChange={handleMessageNewChange}
          onFormSubmit={handleFormSubmit}
         />
         <MessageList 
          messageList={messageList}
          onLikesIncrease={handleLikesIncrease}
          />
      </section>
    </div>
  )
}
