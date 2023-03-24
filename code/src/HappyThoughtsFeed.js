/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import HappyThought from './HappyThought';
import Footer from './Footer';
import './index.css';

const HappyThoughtsFeed = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [happyThought, setHappyThought] = useState('');

  const API_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';
  
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const handleChange = (event) => {
    setHappyThought(event.target.value);
  };
  const CreateThought = (event) => {
    event.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ message: happyThought }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((status) => console.log(status))
      .catch((error) => console.log(error));
    setHappyThought('');
  };
  return (
    <div className="App">
      <h1>Happy Thoughts!</h1>
      <div className="happy-thoughts-form-wrapper">
        <h1>Textruta</h1>
        <form onSubmit={CreateThought}>
          <input
            type="text"
            value={happyThought}
            onChange={handleChange} />
          <button type="submit">Klicka här</button>
        </form>
      </div>
      {!loading && thoughtsList.map((thought) => (
        <HappyThought
          // eslint-disable-next-line no-underscore-dangle
          key={thought._id}
          text={thought.message}
          hearts={thought.hearts}
          timestamp={thought.createdAt} />
      ))}
      {loading && <h2>LOADING</h2>}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HappyThoughtsFeed;
