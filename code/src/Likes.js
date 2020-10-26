import React from 'react';

const Likes = (props) => {
  return (
    <div className="likes">
      <button className="like-button"></button>
      <p>x {props.likes}</p>
    </div>
  )
}

export default Likes;