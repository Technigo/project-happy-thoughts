import React, { useState } from "react";
import moment from "moment";


import "./thoughts-list.css";

const ThoughtsList = ({ thoughtsArray }) => {

  // const [likeClicked, setLikeClicked] = useState(0);

  // const likedThought = () => {

  // };

  return (
    <div className="thoughts-list-container">
      <ul>
        {thoughtsArray.map(thought => (
          <div className="thought-container" key={thought._id}>
            <li>{thought.message}
              <span className="time-stamp">
                {moment(thought.createdAt).fromNow()}
              </span>
            </li>
            <button>
              <span aria-label="heart emoji" role="img">&#10084;&#65039;</span>
            </button>
          </div>
        ))
        }
      </ul >
    </div >
  )

};

export default ThoughtsList;