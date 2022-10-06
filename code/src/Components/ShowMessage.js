import React from 'react';
import Moment from 'react-moment'

const ShowMessage = ({ message, createdAt, hearts, id, onLiked, loading }) => {
  if (loading) {
    return <h1>Loading in progress</h1>
  }

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(id))
  }

  return (
    <section className="outer-show-message">
      <div className="inner-show-message">
        <p className="message">{message}</p>
        <div className="heart-and-counter-container">
          <span className="heart-counter"><button className="heart-btn" onClick={handleClick}>❤️</button> x {hearts}</span>
          <p className="created-at"><Moment fromNow ago>{createdAt}</Moment> ago</p>
        </div>
      </div>
    </section>
  );
}

export default ShowMessage