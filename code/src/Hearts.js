import React, { useState, useEffect } from "react";
import moment from "moment";

export const Hearts = props => {
  const { hearts, id, message, time } = props;
  const [like, setLike] = useState(hearts);

  useEffect(() => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
  }, [id, like]);

  // const handleLikeClick = () => {
  //   console.log(like);
  //   console.log(like + 1);
  //   return setLike(like + 1);
  // };

  return (
    <li className="message-li">
      <div className="message-li-topandbottom">
        <p className="message-li-title">{message}</p>
        <div className="message-li-bottom">
          <button onClick={() => setLike(like + 1)}>
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
