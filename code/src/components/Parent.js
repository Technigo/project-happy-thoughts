import React, { useState, useEffect } from 'react';

import Form from './Form';
import List from './List';

import myImage from '../images/happyText.png';

const Parent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

  const getHappyThougths = () => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getHappyThougths();
  }, []);

  const postNewThought = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((responseData) => {
        setThoughtList((prevList) => [responseData, ...prevList]);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postNewThought();
    setNewThought('');
  };

  const handleNewThoughtChange = (event) => setNewThought(event.target.value);

  const handleHeartClick = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`${API_URL}${thoughtId}/like`, options)
      .then((res) => res.json())
      .then(() => getHappyThougths());
  };

  return (
    <main className="happy-page">
      <img src={myImage} alt="header" />
      <Form
        onFormSubmit={handleSubmit}
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange} />
      <List isLoading={isLoading} thoughtList={thoughtList} onHeartClick={handleHeartClick} />
    </main>
  );
};

export default Parent;
