import React from 'react';
import styles from './LikeButton.module.css';

/* make it change color when clicking/liking a thought */

export const LikeButton = () => (
  <button className={styles.likeButton} type="button">❤️</button>
);