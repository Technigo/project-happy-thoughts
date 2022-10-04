/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const LikeButton = ({ tweet, setThoughts }) => {
  console.log(tweet)
  const handleLikeButton = (id) => {
    const ids = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, ids)
      .then((res) => res.json())
    setThoughts('')
  };

  return (
    <section className="like-button-container">
      <div className="like-content">
        <p key={tweet._id}>{tweet.message}</p>
        <div className="info-like">
          <button
            className={tweet.hearts > 0 ? 'button-heart clicked' : 'button-heart'}
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => handleLikeButton(tweet._id)}>
            <span role="img" aria-label="heart">❤️</span>
          </button>
          <span className="like-counter"> x {tweet.hearts}</span>
        </div>
      </div>
    </section>
  )
};

export default LikeButton;