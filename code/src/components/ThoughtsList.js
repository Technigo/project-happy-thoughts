import React from "react";
import moment from "moment";


import "./thoughts-list.css";
import image from "./red-heart.png";

const ThoughtsList = ({ thoughtsArray }) => {

  return (
    <div className="thoughts-list-container">
      <ul>
        {thoughtsArray.map(thought => (
          <div className="thought-container" key={thought._id}>
            <li>{thought.message} <span className="time-stamp">{moment(thought.createdAt).fromNow()}</span></li>
            <button><img src={image} alt="Red heart icon" /></button>
          </div>
        ))}
      </ul>

    </div >
  )

};

export default ThoughtsList;