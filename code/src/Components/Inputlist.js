import React from "react";
import HeartButton from "./HeartButton";
// import { formatRelative } from "date-fns";

const Inputlist = ({ loading, thoughts, fetchThoughts }) => {

  if (loading) {
    return (
    <section className="thoughts-container">
      <div className="loading-page">
      <h2>Loading...</h2>;
      </div>
    </section>
    )
  }
    return (
      <section className="thoughts-container">
          {thoughts.map(thought => (
            <div className="thought-box" key={thought._id}>
            <p>{thought.message}</p>
            {/* <p>{formatRelative(thought.date, new Date())}</p> */}
            <HeartButton 
              messageID={thought._id} 
              thought={thought}
              fetchThoughts={fetchThoughts}
              />
            </div>
          ))}
      </section>
    )
  }

export default Inputlist;

