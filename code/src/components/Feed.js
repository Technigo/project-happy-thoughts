/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

const Feed = () => {
  const [thoughts, setThoughts] = useState([])

  /* Api Global */
  useEffect(() => {
    fetch('https://project-happy-thoughts-api-7jpb7hb2ja-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((json) => setThoughts(json))
  }, [thoughts.length])

  return (
    <section className="container">
      <NewTweet onTweetSubmitted={(newTweet) => {
        setThoughts([newTweet, ...thoughts]) // Updating the state.
        console.log('onTweetSubmitted called')
      }} />
      {thoughts.map((tweet) => (
        <Tweet
          key={tweet._id} // property key(clave) - property value
          tweet={tweet} />
      ))}
    </section>
  )
};

export default Feed;
