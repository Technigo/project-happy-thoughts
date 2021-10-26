import React, { useEffect, useState } from "react";
import { API_URL } from "utils/urls";
import moment from "moment";

//  display a list of happy thoughts as component. sends request to get happy thoughts from api.

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  return (
    <div className="thoughtsContainer">
      {thoughts.map((thought) => (
        <div className="thoughtWrapper" key={thought._id}>
          <p>{thought.message}</p>
          <button className="hearts">
            <span role="img" aria-label="heart emoji">
              💗
            </span>{" "}
          </button>
          <p className="numberOfLikes">x {thought.hearts}</p>
          <p className="date">Posted: {moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
