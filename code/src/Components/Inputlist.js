import React from "react";
// import { formatRelative } from "date-fns";

const Inputlist = ({ loading, thoughts }) => {

  if (loading) {
    return <p>Loading...</p>;
  }
    return (
      <section className="thoughts-container">
          {thoughts.map(thought => (
            <div className="thought-box">
            <p key={thought._id}>{thought.message}</p>
            {/* <p>{formatRelative(thought.date, new Date())}</p> */}
            <button className="like-button">💖</button>
            </div>
          ))}
      </section>
    )
  }

export default Inputlist;