/* eslint-disable no-underscore-dangle */
/* import React, { useEffetc } from 'react'; */
import React from 'react';

const LikeButton = ({ thought, getHappyThoughts }) => {
  const handleHeartClick = (_id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => {
        getHappyThoughts()
      })
  }
  return (
    <section>
      <button className="like-button" type="button" onClick={() => handleHeartClick(thought._id)}> ❤️ </button>
    </section>
  )
}

export default LikeButton