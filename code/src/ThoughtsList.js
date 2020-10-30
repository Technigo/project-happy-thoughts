import React from "react";
import moment from "moment";

export const ThoughtsList = ({ onLiked, message, hearts, _id, createdAt }) => {
  const handleClick = _id => {
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,
      {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => onLiked(_id));
  };

  return (
    <section>
      <article className="thought-card">
        <div className="top-of-card">
          <p className="thought-text">{message}</p>
        </div>
        <div className="bottom-of-card">
          <p className="like-text">
            <button
              className="liked-heartemoji"
              type="button"
              onClick={() => handleClick(_id)}
              style={{ background: hearts === 0 ? "#f3f1f1" : "#ffadad" }}
            >
              <span role="img" aria-label="Heart">
                {"❤️"}
              </span>
            </button>
            x {hearts}
          </p>
          <p className="time-text">{moment(createdAt).fromNow()}</p>
        </div>
      </article>
    </section>
  );
};
