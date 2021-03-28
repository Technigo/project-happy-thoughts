import React, { useEffect, useState } from 'react';

import Form from './components/Form';
import Header from './components/Header';
import MessageBoard from './components/MessageBoard';

import {API_URL, API_LIKES} from './reusable/urls';

export const App = () => {
    // Declaring useStates:
    const [happyThoughtsList, setHappyThoughtsList] = useState([]);
    const [messageNew, setMessageNew] = useState("");
    
    // useEffect to control when we fetch from API:
  useEffect(() => {
    fetchHappyThoughts();
  }, []);

    // Function to fetch all the thoughts with API:
    const fetchHappyThoughts = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setHappyThoughtsList(data))
        .catch(err => console.error(err));
    };

    const handleMessageNewChange = (e) => {
      setMessageNew(e.target.value);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      // Options for fetch when we POST new happy thought to server.
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: messageNew})
      };

      fetch(API_URL, options)
         .then(response => response.json())
         .then(() => fetchHappyThoughts())
         .catch(err => console.error(err))
      setMessageNew('');
    };

    const handleIncreaseLikes = (id) => {
      // Options for fetch when we POST new likes thought to server.
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        };
        
        fetch(API_LIKES(id), options)
         .then(response => response.json())
         .then(() => fetchHappyThoughts())
         .catch(err => console.error(err));
    };

  return (
    <div className="page-wrapper">
      < Header
      />
      < Form 
        messageNew = {messageNew}
        onMessageNewChange = {handleMessageNewChange}
        onFormSubmit = {handleFormSubmit}
      />
      < MessageBoard 
          happyThoughtsList = {happyThoughtsList}
          handleIncreaseLikes = {handleIncreaseLikes}
      />
    </div>
  );
};