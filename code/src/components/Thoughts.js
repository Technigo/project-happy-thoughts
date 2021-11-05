import React, { useState } from "react";
import LikeButton from "./LikeButton";
import moment from "moment";

const Thoughts = ({ thoughts, onLikeSubmit }) => {
  const [likedClicks, setLikedClicks] = useState(
    JSON.parse(localStorage.getItem(thoughts._id)) + 0
  );

  const addClicks = (id) => {
    setLikedClicks(likedClicks + 1);
    onLikeSubmit(id);
    localStorage.setItem(thoughts._id, JSON.stringify(likedClicks + 1));
  };

  return (
    <>
      <article className="thought-container">
        <p className="message">{thoughts.message}</p>
        <section className="like-section">
          <LikeButton
            thought={thoughts}
            onLikeSubmit={onLikeSubmit}
            addClicks={addClicks}
            likedCliks={likedClicks}
          />
          <p className="number-of-likes"> X {thoughts.hearts}</p>
        </section>
        <section className="like-section">
          <p className="liked-this">
            you <span className="heart">&#10084;</span> this : {likedClicks}
            {likedClicks > 1 ? " times" : " time"}
          </p>
          <p className="date">{moment(thoughts.createdAt).fromNow()}</p>
        </section>
      </article>
    </>
  );
};
export default Thoughts;
