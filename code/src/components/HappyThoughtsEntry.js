import React, { useState } from 'react';

import moment from 'moment'

const HappyThoughtsEntry = ({ id, message, hearts, createdAt }) => {
  const [likedByMe, setLikedByMe] = useState(false)
  const [heartsCounter, setHearts] = useState(hearts);

  const sendHeartToApi = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => res.json())
      .then((data) => {
        // Fetch the number of hearts fresh from API
        setHearts(data.hearts);
      })
  }

  const addHeart = () => {
    setLikedByMe(true)
    setHearts(heartsCounter + 1)
    // skip posting you have already liked this once
    if (!likedByMe) {
      sendHeartToApi()
    }
  }

  const formattedDate = moment(
    createdAt,
    'YYYY-MM-DDTHH:mm:ss.SSSZ'
  )

  return (
    <article className="happy-thoughts-entry">
      <p className="happy-thoughts-entry-text">{message}</p>
      <div className="likes-and-time-stamp">
        <span className="happy-thoughts-entry-heart-counter">
          <button className={likedByMe ? ' button-likes button-likes-haslikes' : 'button-likes button-likes-nolikes'} onClick={addHeart} type="button">❤️</button>x {heartsCounter}
        </span>
        <span className="happy-thoughts-entry-date-stamp">{formattedDate.fromNow()}</span>
      </div>
    </article>
  )
}

export default HappyThoughtsEntry;