/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

import LikeButton from 'components/LikeButton/LikeButton';
import styles from './ThoughtCard.module.css';

const ThoughtCard = ({ thoughtsFeed, setThoughtsFeed }) => {
  return (
    <>
      {thoughtsFeed.map((postedThought) => (
        <div key={postedThought._id} className={styles.thoughtCard}>
          <h4 className={styles.thoughtMessage}>{postedThought.message}</h4>
          <div className={styles.likesAndTimeContainer}>
            <div className={styles.likesContainer}>
              <LikeButton
                postedThought={postedThought}
                postedThoughtId={postedThought._id}
                thoughtsFeed={thoughtsFeed}
                setThoughtsFeed={setThoughtsFeed} />
              <p> x {postedThought.hearts}</p>
            </div>
            <p className={styles.timePosted}>{moment(postedThought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ThoughtCard;