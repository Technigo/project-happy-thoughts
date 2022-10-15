import React from "react";
import styles from "./LikeButton.module.css";

const LikeButton = ({ data, handleLikeSubmit }) => {

  return (
    <section>
      <button
        type="submit"
        onclick={() => handleLikeSubmit(data._id)}
        className={styles.likeButton}
      >
        <span className="heart-span" role="img" aria-label="heart emoji"> ❤️ </span>
      </button>
      <p className={styles.likeCounter}> × 0</p>
    </section>
  );
};

export default LikeButton;
