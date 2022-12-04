/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const LikeBtn = ({ event, setNewLike }) => {
  const [liked, setLiked] = useState(false);

  // the function that enables the likes-count to update in the App-component
  const handleNewLikeChange = () => {
    setNewLike(true)
  }

  // The function that registers the users like to the database, it also
  // triggers the state-hook that makes the button change color
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

      fetch(`https://project-happy-thoughts-api-auhzlcxnrq-lz.a.run.app/messages/${event.id}/like`, options)
        .then((data) => data.json())
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
      <p className="number-of-likes">x {event.like}</p>
    </div>
  )
}

export default LikeBtn;