/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const TimesLiked = ({ timesLiked, id }) => {
  const [numberOfHearts, setNumberOfHearts] = useState(timesLiked)

  const handleHeartButtonClick = (event) => {
    event.preventDefault();
    setNumberOfHearts(numberOfHearts + 1)
    const endpoint = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;
    fetch(
      endpoint,
      { method: 'POST' }
    )
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <div className="liked-container">
      <button type="button" className="heart-container" onClick={handleHeartButtonClick}>❤️</button>
      <p className="times-liked">x {numberOfHearts}</p>
    </div>
  )
}

export default TimesLiked;