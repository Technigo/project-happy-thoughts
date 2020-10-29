import React, { useState } from 'react';
import { API_URL } from '../constants'

const LikeButton = ({ message }) => {
  const [count, setCount] = useState(message.hearts)
  const onLikeClick = () => {

    const url = `${API_URL}/${message._id}/like`

    fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      })
    .then((res) => res.json())
    .then((json) => {
      setCount(json.hearts)
    })
  };
  
  return (
    <div className="like-button-container">
      <button 
        className="like-button"
        type="button"
        onClick={() => onLikeClick(message._id)}>
        <span aria-label="heart emoji" role="img">&#10084;&#65039;</span>
      </button>
      <p>x {count}</p>
    </div>
    );
}
 
export default LikeButton;