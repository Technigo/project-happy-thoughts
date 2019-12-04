import React, { useState, useEffect } from "react";

export const Hearts = props => {
  const { hearts, id, message } = props;
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

  // setLike(like + 1);
  // const handle = () => {
  //   setLike(like + 1);
  // };

  const handleLikeClick = () => {
    console.log(like);
    console.log(like + 1);
    return setLike(like + 1);
  };

  return (
    <li className="message-li">
      <p>{message}</p>
      <p>x {hearts}</p>
      <button onClick={handleLikeClick}>
        <span role="img" aria-labelledby="heart icon">
          💖
        </span>
      </button>
    </li>
  );
};
