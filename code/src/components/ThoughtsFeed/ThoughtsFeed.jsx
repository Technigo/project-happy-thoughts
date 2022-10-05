/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import ThoughtForm from 'components/ThoughtForm/ThoughtForm';
import LikeButton from '../LikeButton/LikeButton';
import styles from './ThoughtsFeed.module.css';

const ThoughtsFeed = () => {
  const [thoughtsFeed, setThoughtsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsFeed(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  if (loading) {
    return <h2 className={styles.loadingMessage}>Loading...</h2>
  }

  const handleMessageLiked = (likedThoughtId) => {
    const updatedThoughtsFeed = thoughtsFeed.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughtsFeed(updatedThoughtsFeed);
  };

  return (
    <section className={styles.feedGrid}>
      <ThoughtForm setThoughtsFeed={setThoughtsFeed} />
      {thoughtsFeed.map((thought) => (
        <div key={thought._id} className={styles.thoughtCard}>
          <h4 className={styles.thoughtMessage}>{thought.message}</h4>
          <div className={styles.likesAndTimeContainer}>
            <div className={styles.likesContainer}>
              <LikeButton
                thoughtId={thought._id}
                thought={thought}
                handleMessageLiked={handleMessageLiked} />
              <p className={styles.amountOfLikes}> x {thought.hearts}</p>
            </div>
            <p className={styles.timePosted}>
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
};

export default ThoughtsFeed;