import React, { useState, useEffect } from 'react';

import { API_URL, LIKES_URL } from '../utils/urls';

import Header from './Header';
import FormInput from './FormInput';
import ThoughtsList from './ThoughtsList';
// import LikeButton from './LikeButton';

const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  const onThoughtsChange = (event) => {
    setNewThought(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        //v1:
        // setThoughts([data, ...thoughts]);

        //v2:
        fetchThoughts(setNewThought(''));
      });
  };
  // console.log(thoughts);

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        //   const updatedThoughts = thoughts.map((item) => {
        //     if (item._id === data._id) {
        //       item.hearts += 1;
        //       return item;
        //     } else {
        //       return item;
        //     }
        //   });

        //   setThoughts(updatedThoughts);
        fetchThoughts();
      });
  };

  return (
    <div className='thoughts-container'>
      <Header />
      <FormInput
        // thoughts={thoughts}
        // setThoughts={setThoughts}
        newThought={newThought}
        // setNewThought={setNewThought}
        onThoughtsChange={onThoughtsChange}
        onFormSubmit={onFormSubmit}
      />
      <ThoughtsList thoughts={thoughts} onLikesIncrease={onLikesIncrease} />
    </div>
  );
};

export default HappyThoughts;
