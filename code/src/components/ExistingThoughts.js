import React from "react";
import moment from "moment";

const ExistingThoughts = ({ allThoughts }) => {
  return (
    <section className="thoughts-container">
      {allThoughts.map((thought) => (
        <div className="thought-box" key={thought._id}>
          <p className="message">{thought.message}</p>
          <div className="post-info">
            <button className="heart"> &hearts; {thought.hearts}</button>
            <p className="date">posted {moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExistingThoughts;
