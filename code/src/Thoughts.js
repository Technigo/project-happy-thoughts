import React, { useState } from "react";
import moment from "moment";
import { Emoji } from "./Emoji";

export const Thoughts = props => {
  const { message, hearts, createdAt, _id } = props.thought;
  const [heartLike, setHeartLike] = useState(hearts);

  const submitHeart = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
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
              <Emoji symbol="❤️" label="heart" />
            </button>
            <span className="likes"> x {heartLike}</span>
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
