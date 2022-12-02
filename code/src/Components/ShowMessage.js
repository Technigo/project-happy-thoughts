/* eslint-disable react/button-has-type */
import React from 'react';
import Moment from 'react-moment'

const ShowMessage = ({ message, createdAt, hearts, id, onLiked, loading }) => {
  if (loading) {
    return <h1>Loading in progress</h1>
  }

  const handleClick = () => {
    fetch(`https://project-happy-thoughts-api-2su4jgkxaa-lz.a.run.app/thoughts/${id}/like`, {
      method: 'PATCH',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }

  return (
    <section className="outer-show-message">
      <div className="inner-show-message">
        <p className="message">{message}</p>
        <div className="heart-and-counter-container">
          <span className="heart-counter">
            <button
              className={hearts === 0 ? 'heart-btn-no-like' : 'heart-btn-like'}
              onClick={handleClick}>
              ❤️
            </button> x {hearts}
          </span>
          <p className="created-at"><Moment fromNow ago>{createdAt}</Moment> ago</p>
        </div>
      </div>
    </section>
  );
}

export default ShowMessage