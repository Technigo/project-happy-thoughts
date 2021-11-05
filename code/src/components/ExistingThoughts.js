import React from "react";
import moment from "moment";

const ExistingThoughts = ({ allThoughts, setAllThoughts }) => {
  const onLikesIncrease = (thoughtId) => {
    const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;

    const options = {
      method: "POST",
    };

    fetch(LIKES_URL, options)
      .then((res) => res.json)
      .then((data) => {
        const updatedThoughts = allThoughts.map((thought) => {
          if (thought._id === data._id) {
            thought.hearts += 1;
            return thought;
          }
          return thought;
        });
        setAllThoughts(updatedThoughts);
      });
  };

  return (
    <section className="thoughts-container">
      {allThoughts.map((thought) => (
        <div className="thought-box" key={thought._id}>
          <p className="message">{thought.message}</p>
          <div className="post-info">
            <button
              onClick={() => onLikesIncrease(thought._id)}
              className="heart"
            >
              {" "}
              &hearts; {thought.hearts}
            </button>
            <p className="date">posted {moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExistingThoughts;
