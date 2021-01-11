import React, { useState } from "react";
import moment from "moment";

import "./thoughts-list.css";
import { THOUGHTS_URL } from "../urls"


const ThoughtsList = ({ happyThought, timeStamp, nrOfLikes, thought, onLike, id }) => {

  const [heartColor, setHeartColor] = useState("heart-button");

  const addNewHeart = () => {
    fetch(`${THOUGHTS_URL}/${thought._id}/hearts`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      onLike(thought._id);
      setHeartColor("pink-background");
    })
  };

  return (
    <div className="thoughts-list-container">
      <ul>
        <div className="thought-container">
          <li>
            {happyThought}
          </li>
          <div className="heart-button-container">
            <div>
              <button
                className={heartColor}
                onClick={addNewHeart}
              >
                <span aria-label="heart" role="img">
                  &#10084;&#65039;
                </span>
              </button> x {nrOfLikes}
            </div>
            <p className="time-stamp">
              {moment(timeStamp).fromNow()}
            </p>
          </div>
        </div>
      </ul>
    </div>
  )
};

export default ThoughtsList;