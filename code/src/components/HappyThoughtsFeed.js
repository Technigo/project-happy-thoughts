/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
/* eslint-disable brace-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import NewHappyThought from 'components/NewHappyThought';
import HappyThoughtsList from './HappyThoughtsList';
import Loading from './Loading';
import Footer from './Footer';
import 'index.css';

const HappyThoughtsFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [happyThought, setHappyThought] = useState('');

  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';
  
  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleFormSubmit = (event) => {
    setHappyThought(event.target.value);
  };

  const newHappyThought = () => {
    setHappyThought('');
    setLoading(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  
    const options = {
      method: 'POST',
      body: JSON.stringify({ message: happyThought }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json' 
      } 
    };

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((data) => { setThoughtsList([data, ...thoughtsList]) })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    setThoughtsList('');
  }, [thoughtsList]);

  const handleHearts = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, options)
      .then((res) => res.json())
      .then(console.log('likes'))
      .then((error) => console.error(error))
      .finally(() => fetchThoughts(''));
  };

  return (
    <main className="happy-thoughts-app">
      <h1>Happy Thoughts!</h1>
      <NewHappyThought
        newHappyThought={newHappyThought}
        handleChange={handleFormSubmit}
        onFormSubmit={onFormSubmit} />
      <HappyThoughtsList 
        loading={loading && (<Loading />)}
        thoughtsList={thoughtsList}
        handleHearts={handleHearts}
      />
      {/* {thoughtsList.map((thought) => (
        <HappyThought
          key={thought._id}
          text={thought.message}
          hearts={thought.hearts}
          timestamp={thought.createdAt} 
          handleHearts={() => handleHearts(thought._id)}
        />
      ))} */}
      {loading && (<Loading />)}
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default HappyThoughtsFeed;
