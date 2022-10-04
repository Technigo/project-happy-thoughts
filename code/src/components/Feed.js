import React, { useState, useEffect } from 'react';
import LikeButton from './LikeButton';
import NewTweet from './NewTweet';

// handleFormSubmit, handleOnNewTweet

const Feed = ({ handlelikeButton, newTweets }) => {
  const [thoughts, setThoughts] = useState([])
  /* Api Global */
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((json) => setThoughts(json))
  }, [])

  return (
    <section className="container">
      <NewTweet
        newTweets={newTweets} />
      {thoughts.map((tweet) => (
        <LikeButton
          // eslint-disable-next-line no-underscore-dangle
          key={tweet._id}
          tweet={tweet}
          handlelikeButton={handlelikeButton} />
      ))}
    </section>
  )
};

export default Feed;
