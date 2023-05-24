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

const HappyThoughtsFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [newHappyThought, setNewHappyThought] = useState('');

  const API_URL = 'https://happy-thoughts-api-w15-o6447lrzoq-ew.a.run.app/thoughts'
  // const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';
  
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

  // const onFormSubmit = (event) => {
  //   setNewHappyThought(event.target.value);
  // };

  // const newHappyThought = () => {
  //   setNewHappyThought('');
  //   setLoading(false);
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const val = event.target['thought-input'].value;

    const options = {
      method: 'POST',
      body: JSON.stringify({ message: val }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json' 
      } 
    };

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((data) => { setThoughtsList([data, ...thoughtsList]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleHearts = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    // fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, options)
    fetch(`https://happy-thoughts-api-w15-o6447lrzoq-ew.a.run.app/thoughts/${id}/like`, options)
      .then((res) => res.json())
      .then(console.log('likes'))
      .then((error) => console.error(error))
      .finally(() => fetchThoughts(''));
  };

  return (
    <main className="happy-thoughts-app">
      <h1>Happy Thoughts!</h1>
      <NewHappyThought
        handleFormSubmit={onFormSubmit}
      />
      <HappyThoughtsList 
        loading={loading}
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
      {loading && <Loading />}
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default HappyThoughtsFeed;
