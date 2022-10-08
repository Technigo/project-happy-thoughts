/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* import React, { useEffetc } from 'react'; */
import React from 'react';

const LikeButton = ({ thought, getHappyThoughts, hearts }) => {
  // this function posts the likes to the API where it's stored
  const handleHeartClick = (_id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => {
        getHappyThoughts()
      })
  }
  // this if-statement decides if button should be grey or pink depending on if it has likes from before or not
  if (hearts > 0) {
    return (
      <section>
        <button className="like-button-pink" type="button" onClick={() => handleHeartClick(thought._id)}> ❤️ </button>
      </section>)
  } else {
    return (
      <section>
        <button className="like-button-grey" type="button" onClick={() => handleHeartClick(thought._id)}> ❤️ </button>
      </section>
    )
  }
}

export default LikeButton