/* eslint-disable no-underscore-dangle */
import React from 'react';
import styles from './LikeButton.module.css';

/* make it change color when clicking/liking a thought */
const LikeButton = ({ thoughtId, handleMessageLiked }) => {
  console.log(thoughtId)
  const handleLikeButtonClick = () => {
    console.log(thoughtId)
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    }).then(() => {
      handleMessageLiked.handleMessageLiked(thoughtId);
    })
  };

  return (
    <button className={styles.likeButton} onClick={handleLikeButtonClick} type="button">❤️</button>
  );
};
export default LikeButton;