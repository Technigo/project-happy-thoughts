/* eslint-disable no-underscore-dangle */
import React from 'react';
import styles from './LikeButton.module.css';

const LikeButton = ({ postedThought, postedThoughtId, thoughtsFeed, setThoughtsFeed }) => {
  const handleMessageLiked = (likedThoughtId) => {
    const updatedThoughtsFeed = thoughtsFeed.map((item) => {
      if (item._id === likedThoughtId) {
        item.hearts += 1
      }
      return item
    });
    setThoughtsFeed(updatedThoughtsFeed);
  };

  const handleLikeButtonClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${postedThoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    }).then(() => {
      handleMessageLiked(postedThoughtId);
    });
  };

  return (
    <button
      className={postedThought.hearts === 0 ? styles.likeButton : styles.clickedLikeButton}
      onClick={handleLikeButtonClick}
      type="button">
      <span role="img" aria-label="heart">❤️</span>
    </button>
  );
};

export default LikeButton;