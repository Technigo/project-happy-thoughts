import React, { useState } from "react";
import moment from "moment";

export const Hearts = props => {
  const { hearts, id, message, time, onLiked } = props;
  const [like, setLike] = useState(hearts);

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => onLiked(id));
    setLike(like + 1);
  };

  let style = { background: "#f2f0f0" };
  if (like > 0) style.background = "#ffadad";

  return (
    <li className="message-li">
      <div className="message-li-topandbottom">
        <p className="message-li-title">{message}</p>
        <div className="message-li-bottom">
          <button onClick={handleClick} style={style}>
            <span role="img" aria-labelledby="heart icon">
              💖
            </span>
          </button>
          <p className="hearts-number">x {hearts}</p>
          <p className="time">{moment(time).fromNow()}</p>
        </div>
      </div>
    </li>
  );
};
