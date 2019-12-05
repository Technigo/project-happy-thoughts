import React, { useState } from "react";
import moment from "moment";

export const Thoughts = props => {
  const { message, hearts, createdAt } = props.thought;
  const [heartLike, setHeartLike] = useState(hearts);

  const submitHeart = () => {
    fetch("https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like", {
      method: "POST"
    });
    setHeartLike(heartLike + 1);
  };

  return (
    <div className="thoughtsContainer">
      <article>
        <h1>{message}</h1>
        <div className="heartAndTimeContainer">
          <div className="likeContainer">
            <button
              className={heartLike > 0 ? "liked" : "notLiked"}
              type="submit"
              onClick={submitHeart}
            >
              <span className="heartLike" role="img">
                ❤️
              </span>
            </button>
            <span className="likes">x {heartLike}</span>
          </div>
          <p className="time">
            {moment(createdAt)
              .startOf("minutes")
              .fromNow()}
          </p>
        </div>
      </article>
    </div>
  );
};

/*
<article>
  <div>
    <br /> {thought.message}
    <div>
      <ul>
        <li>
          <button onClick={handleHeartClick}>Heart</button>
        </li>
      </ul>
    </div>
  </div>
</article>;

*/
