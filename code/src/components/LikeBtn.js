/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const LikeBtn = ({ event, setNewLike }) => {
  const [liked, setLiked] = useState(false);

  const handleNewLikeChange = () => {
    setNewLike(true)
  }

  // The function that registers the users like to the database, it also
  const onButtonClick = (event2) => {
    event2.preventDefault();

    if (liked === false) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }

      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${event._id}/like`, options)
        .then((result) => result.json())
        .catch((error) => console.error(error))
        .finally(() => {
          setLiked(true)
          handleNewLikeChange()
        })
    }
  }

  return (
    <div className="like-grid">
      <button
        type="button"
        className="like-btn"
        style={{
          backgroundColor: liked ? '#FFADAD' : '',
          color: liked ? 'black' : ''
        }}
        value={event}
        onClick={onButtonClick}>
        <span>❤️</span>
      </button>
      <p className="number-of-likes">x {event.hearts}</p>
    </div>
  )
}

export default LikeBtn;