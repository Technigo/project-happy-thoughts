import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import '../Style/LikeButton.css';
import '../Style/HeartIcon.css';

const LikeButton = ({ message }) => {
  const [count, setCount] = useState(message.hearts)
  const [classNames, setClassNames] = useState([])
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

  useEffect(() => {
    setClassNames([
      "like-button",
      ...(count > 0 ? ["pink-button"] : [])
    ]);
  },[count])
  
  return (
    <div className="like-button-container">
      <button 
        className={classNames.join(' ')}
        type="button"
        onClick={() => onLikeClick(message._id)}>
        <span className="heart-icon-like" aria-label="heart emoji" role="img">&#10084;&#65039;</span>
      </button>
      <p>x {count}</p>
    </div>
    );
}
 
export default LikeButton;