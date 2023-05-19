/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import './messageList.css';

const LikeBtn = ({ thought, setNewLike }) => {
  const [liked, setLiked] = useState(false);

  // the function that enables the likes-count to update in the App-component
  const handleNewLikeChange = () => {
    setNewLike(true)
  }

  // The function that registers the users like to the database, it also
  // triggers the state-hook that makes the button change color
  const onButtonClick = (like) => {
    like.preventDefault();

    if (liked === false) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }

      fetch(`https://project-happy-thoughts-ru2v7b5sba-lz.a.run.app/thoughts/${thought._id}/like`, options)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .finally(() => {
          setLiked(false)
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
        value={thought}
        onClick={onButtonClick}>
        <span>❤️</span>
      </button>
      <p className="number-of-likes">x {thought.hearts}</p>
    </div>
  )
}

export default LikeBtn;