/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

import LikeButton from 'components/LikeButton/LikeButton';
import styles from './ThoughtCard.module.css';

const ThoughtCard = ({ thoughtsFeed, setThoughtsFeed }) => {
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
    <>
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
    </>
  )
}

export default ThoughtCard;