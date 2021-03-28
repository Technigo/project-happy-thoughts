import React, { useState, useEffect } from 'react';

import ThoughtsList from './components/ThoughtsList';
import NewThoughts from './components/NewThoughts';

import { API_URL, LIKES_URL } from './reusable/urls';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchThoughtsList();
  }, []);

  const fetchThoughtsList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setThoughtsList(messages))
      .catch(err => console.error(err));
  }

  const onNewMessageChange = (event) => {
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
    .then(() => {
      window.location.reload()
    })
    .then(receivedMessage => setThoughtsList([receivedMessage, ...thoughtsList]));
  }

  const onHeartLikes = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(LIKES_URL(id), options)
    .then(res => res.json())
    .then(() => {
      window.location.reload()
    })
    .then(receivedMessage => {
      const updatedThoughtsList = thoughtsList.map(message => {
        if (message._id === receivedMessage._id) {
          message.likes += 1;
        }
        return message;
      });
        setThoughtsList(updatedThoughtsList);
      })
    .catch(err => console.error(err));
  }

  return (
    <div>
      <NewThoughts
        newMessage={newMessage}
        onNewMessageChange={onNewMessageChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtsList
        thoughtsList={thoughtsList}
        onHeartLikes={onHeartLikes}
      />

    </div>
  )
}


