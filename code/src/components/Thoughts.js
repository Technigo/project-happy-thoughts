import React, { useEffect, useState } from "react";
import moment from "moment";
import { API_URL } from "utils/urls";

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log("thoughts", thoughts);

  return (
    <div>
      {thoughts.map((thought) => (
        <div className="thought-wrapper" key={thought._id}>
          <p>{thought.message}</p>
          <button>&hearts;</button>
          <p>x {thought.hearts}</p>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

export default Thoughts;
