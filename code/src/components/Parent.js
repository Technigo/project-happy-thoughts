/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Form from './Form';
import List from './List';

import myImage from '../images/happyText.png';

const Parent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  // get list of posts
  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

  const fetchMessages = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  //   new post clean up
  const postNewThought = () => {
    setNewThought('');
    setIsLoading(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .then(() => setNewThought(''));
  };

  // like button function
  const handleLikes = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, options)
      .then((res) => res.json())
      .then(console.log('bajskorv'))
      .then((error) => console.error(error))
      .finally(() => fetchMessages(''));
  };

  return (
    <main className="happy-page">
      <img className="header-image" src={myImage} alt="header" />
      <Form
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <List isLoading={isLoading} thoughtList={thoughtList} handleLikes={handleLikes} />
    </main>
  );
};

export default Parent;
