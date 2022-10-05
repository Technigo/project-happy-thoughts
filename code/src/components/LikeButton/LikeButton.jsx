/* eslint-disable no-underscore-dangle */
import React from 'react';
import styles from './LikeButton.module.css';

/* make it change color when clicking/liking a thought */
const LikeButton = ({ thought, thoughtId, handleMessageLiked }) => {
  const handleLikeButtonClick = () => {
    console.log(thoughtId)
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    }).then(() => {
      handleMessageLiked(thoughtId);
    })
  };

  return (
    <button className={thought.hearts === 0 ? styles.likeButton : styles.likedlikeButton} onClick={handleLikeButtonClick} type="button"><span role="img" aria-label="heart">❤️</span></button>
  );
};
export default LikeButton;