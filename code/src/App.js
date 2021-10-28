import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import Header from 'components/Header';
import PostAThought from 'components/PostAThought';
import Footer from 'components/Footer';
// likeAPost is a function, not an component. Therefore in camelCase.
import likeAPost from 'likeAPost';
import LoadingSpinner from 'components/LoadingSpinner';
import RecentThoughtsList from './components/RecentThoughtsList';

export const App = () => {
  const [recentThoughts, setRecentThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

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
  };

  // return a promise rather than directly returning the value
  // async keyword turns a function into a promise
  const handleLikes = async (thoughtID) => {
    likeAPost({ thoughtID, recentThoughts }).then((updatedLikes) => {
      setRecentThoughts(updatedLikes);
    });
    // setRecentThoughts(
    //   <LikeAPost thoughtID={thoughtID} recentThoughts={recentThoughts} />
    // );
    // const options = {
    //   method: 'POST',
    // };
    // fetch(API_URL_LIKE(thoughtID), options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const updateLikes = recentThoughts.map((thought) => {
    //       // eslint-disable-next-line no-underscore-dangle
    //       if (thought._id === data._id) {
    //         thought.hearts += 1;
    //         return thought;
    //       } else {
    //         return thought;
    //       }
    //     });
    //     setRecentThoughts(updateLikes);
    //   });
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
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />
        <div className='refresh-button-container'>
          <button
            aria-label='Refresh the feed'
            type='button'
            className='refresh-button'
            onClick={fetchThoughts}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          >
            Refresh Feed <span className='reload-symbol'>⟳</span>
          </button>
        </div>
        {loading && <LoadingSpinner />}
        <RecentThoughtsList
          recentThoughts={recentThoughts}
          onLikes={handleLikes}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />
      </fieldset>
      <Footer
        textLineOne='&#169; 2021 by Katie Wu'
        textLineTwo='Team Foxes | Technigo'
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
    </>
  );
};
