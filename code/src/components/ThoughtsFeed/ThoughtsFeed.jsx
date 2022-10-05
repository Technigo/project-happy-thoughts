/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

import LikeButton from '../LikeButton/LikeButton';
import styles from './ThoughtsFeed.module.css';

const ThoughtsFeed = ({ loading, thoughtsFeed, setThoughtsFeed }) => {
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