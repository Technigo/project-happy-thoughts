import React from 'react';
import Moment from 'react-moment';

const ShowMessage = ({ message, createdAt, hearts, loading, id, onLiked }) => {
  if (loading) {
    return <h1>This page is loading...</h1>
  }

  const handleLikeClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }

  return (
    <section className="outer-show-msg-wrapper">
      <div className="inner-show-msg-wrapper">
        <p className="message">{message}</p>
        <button
          type="submit"
          className={hearts === 0 ? 'heart-btn-no-like' : 'heart-btn-like'}
          onClick={handleLikeClick}>
                ❤️
        </button>
        <div className="heart-counter">
          x {hearts}
        </div>

        <div>
          <p className="created-at"><Moment fromNow ago>{createdAt}</Moment> ago</p>
        </div>
      </div>
    </section>
  )
}

export default ShowMessage;