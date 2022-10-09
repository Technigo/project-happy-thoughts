/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

import LikeButton from 'components/LikeButton/LikeButton';
import styles from './ThoughtCard.module.css';

const ThoughtCard = ({ feed, setFeed }) => {
  return (
    <>
      {feed.map((postedThought) => (
        <div key={postedThought._id} className={styles.thoughtCard}>
          <h4 className={styles.thoughtMessage}>{postedThought.message}</h4>
          <div className={styles.likesAndTimeContainer}>
            <div className={styles.likesContainer}>
              <LikeButton
                postedThought={postedThought}
                postedThoughtId={postedThought._id}
                feed={feed}
                setFeed={setFeed} />
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