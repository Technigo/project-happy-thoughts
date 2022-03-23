import React from "react";
// import { formatRelative } from "date-fns";
//{formatRelative(thought.date, new Date())}

const Inputlist = ({ loading, thoughts }) => {

  if (loading) {
    return <p>Loading...</p>;
  }
    return (
      <section className="thoughts-container">
        <ul>
          {thoughts.reverse().map(thought => (
            <li key={thought._id}>{thought.message}</li>
          ))}
        </ul>
      </section>
    )
  }

export default Inputlist;