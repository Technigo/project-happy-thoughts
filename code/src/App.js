import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import Header from 'components/Header';
import PostAThought from 'components/PostAThought';
import Footer from 'components/Footer';
import LikeAPost from 'components/LikeAPost';
import RecentThoughtsList from './components/RecentThoughtsList';

export const App = () => {
  const [recentThoughts, setRecentThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setRecentThoughts(json));
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

  const handleLikes = (thoughtID) => {
    setRecentThoughts(
      <LikeAPost thoughtID={thoughtID} recentThoughts={recentThoughts} />
    );
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
        <RecentThoughtsList
          recentThoughts={recentThoughts}
          handleLikes={handleLikes}
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
