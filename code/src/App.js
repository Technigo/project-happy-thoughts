import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';

import Header from 'components/Header';
import PostAThought from 'components/PostAThought';
import Footer from 'components/Footer';
import LoadingSpinner from 'components/LoadingSpinner';
import Confetti from 'react-confetti';
import likeAPost from 'likeAPost'; // likeAPost is a function, not an component. Therefore in camelCase.
import RecentThoughtsList from './components/RecentThoughtsList';

export const App = () => {
  const [recentThoughts, setRecentThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setRecentThoughts(json))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  };

  const handleSubmit = (event) => {
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
      .then((json) => setRecentThoughts([json, ...recentThoughts]));
    // empty the textarea after posting a happy thought
    setNewThought('');
    // each time an user is sending a happy thought, it will show confetti
    setShowConfetti(true);
  };

  // return a promise rather than directly returning the value
  // async keyword turns a function into a promise
  const handleLikes = async (thoughtID) => {
    likeAPost({ thoughtID, recentThoughts }).then((updatedLikes) => {
      setRecentThoughts(updatedLikes);
    });
  };

  return (
    <>
      <fieldset>
        <Header title='Share your Happy Thoughts' />
        <PostAThought
          newThought={newThought}
          onNewThoughtChange={onNewThoughtChange}
          onSubmit={handleSubmit}
          title="What's making you happy right now?"
          placeholder='React is making me happy!'
        />
        <div className='refresh-button-container'>
          <button
            aria-label='Refresh the feed'
            type='button'
            className='refresh-button'
            onClick={fetchThoughts}
          >
            Refresh Feed <span className='reload-symbol'>⟳</span>
          </button>
        </div>
        {loading && <LoadingSpinner />}
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            /* do not want to recycle the confetti, it will end after showing 500 pieces */
            recycle={false}
            /* set the state to false after each complete confetti */
            onConfettiComplete={() => setShowConfetti(false)}
          />
        )}
        <RecentThoughtsList
          recentThoughts={recentThoughts}
          onLikes={handleLikes}
        />
      </fieldset>
      <Footer
        textLineOne='&#169; 2021 by Katie Wu'
        textLineTwo='Team Foxes | Technigo'
      />
    </>
  );
};
