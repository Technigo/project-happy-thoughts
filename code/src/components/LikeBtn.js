/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const LikeBtn = ({ event, loading, setNewLike }) => {
  const [liked, setLiked] = useState(false);
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const handleNewLikeChange = () => {
    setNewLike(true)
  }

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
      console.log(event._id);
      fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${event._id}/like`, options)
        .then((result) => result.json())
        .catch((error) => console.error(error))
        .finally(() => {
          setLiked(true)
          handleNewLikeChange()
          // setLoading(true)
        })
    }
  }

  return (
    <>
      <button
        type="button"
        className="like-btn"
        value={event}
        onClick={onButtonClick}>
        <span>❤️</span>
      </button>
      <p className="number-of-likes">x {event.hearts}</p>
    </>
  )
}

export default LikeBtn;