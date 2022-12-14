/* eslint-disable no-underscore-dangle */
import React from 'react';
import { API_URL } from 'components/utils/api';
import styles from './LikeButton.module.css';

const LikeButton = ({ postedThought, postedThoughtId, feed, setFeed }) => {
  // this function maps through the thoughts and adds
  // 1 like to the thought with the matching ID of
  // the liked thought, and then updates the feed:
  const handleMessageLiked = (likedThought) => {
    const updatedFeed = feed.map((item) => {
      if (item._id === likedThought) {
        item.hearts += 1
      }
      return item
    });
    setFeed(updatedFeed);
  };
  // when clicking the like button a post request to that particular thought
  // is sent and then the handleMessageLiked function is being invoked
  const handleLikeButtonClick = () => {
    fetch(`${API_URL('thoughts')}/${postedThoughtId}/like`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' }
    }).then(() => handleMessageLiked(postedThoughtId));
  };

  return (
    <button
    // if the posted thought has no likes background is gray, else pink
      className={postedThought.hearts === 0 ? styles.likeButton : styles.clickedLikeButton}
      onClick={handleLikeButtonClick}
      type="button">
      <span role="img" aria-label="heart">❤️</span>
    </button>
  );
};

export default LikeButton;