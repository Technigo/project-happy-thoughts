/* eslint-disable no-underscore-dangle */
import React from 'react';
import styles from './LikeButton.module.css';

const LikeButton = ({ postedThought, thoughtId, thoughtsFeed, setThoughtsFeed }) => {
  console.log(postedThought)
  const handleMessageLiked = (likedThoughtId) => {
    const updatedThoughtsFeed = thoughtsFeed.map((happyThought) => {
      if (happyThought._id === likedThoughtId) {
        happyThought.hearts += 1
      }
      return happyThought
    });
    setThoughtsFeed(updatedThoughtsFeed);
  };

  const handleLikeButtonClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    }).then(() => {
      handleMessageLiked(thoughtId);
    })
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