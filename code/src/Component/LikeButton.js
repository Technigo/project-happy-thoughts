import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import '../Style/LikeButton.css';

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
    if (count > 0) {
      setClassNames(["like-button", "pink-button"])
    } else {
      setClassNames(["like-button"])
    }
  }, [count])
  
  return (
    <div className="like-button-container">
      <button 
        className={classNames.join(' ')}
        type="button"
        onClick={() => onLikeClick(message._id)}>
        <span aria-label="heart emoji" role="img">&#10084;&#65039;</span>
      </button>
      <p>x {count}</p>
    </div>
    );
}
 
export default LikeButton;