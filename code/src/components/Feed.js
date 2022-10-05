import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

// handleFormSubmit, handleOnNewTweet

const Feed = () => {
  const [thoughts, setThoughts] = useState([])
  /* Api Global */
  useEffect(() => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((json) => setThoughts(json))
  }, [thoughts.length])

  return (
    <section className="container">
      <NewTweet onTweetSubmitted={(newTweet) => thoughts.push(newTweet)} />
      {thoughts.map((tweet) => (
        <Tweet
          // eslint-disable-next-line no-underscore-dangle
          key={tweet._id}
          tweet={tweet} />
      ))}
    </section>
  )
};

export default Feed;
