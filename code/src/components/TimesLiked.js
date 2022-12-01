/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';

const TimesLiked = ({ timesLiked, id }) => {
  const [numberOfHearts, setNumberOfHearts] = useState(timesLiked)

  const handleHeartButtonClick = (event) => {
    event.preventDefault();
    setNumberOfHearts(numberOfHearts + 1)
    fetch(
      `https://project-happy-thoughts-api-tyqwqvxomq-lz.a.run.app/thoughts/${id}/like`,
      { method: 'POST' }
    )
      .then(() => {
        window.location.reload()
      })
  }
  if (numberOfHearts > 0) {
    return (
      <div className="liked-container">
        <button style={{ backgroundColor: '#ffadad' }} type="button" className="heart-container" onClick={handleHeartButtonClick}>❤️</button>
        <p className="message-info">x {numberOfHearts}</p>
      </div>
    )
  } else {
    return (
      <div className="liked-container">
        <button type="button" className="heart-container" onClick={handleHeartButtonClick}>❤️</button>
        <p className="message-info">x {numberOfHearts}</p>
      </div>
    )
  }
}

export default TimesLiked;