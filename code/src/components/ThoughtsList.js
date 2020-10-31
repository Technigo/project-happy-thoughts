import React, { useState } from "react";
import moment from "moment";


import "./thoughts-list.css";
import { THOUGHTS_URL } from "urls";



const ThoughtsList = ({ thoughtsArray }) => {

  const HEARTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts/{thought._id}/like";

  // const thoughtsId = () => {
  //   const thoughId = thoughtsArray.map(id => {
  //     return id._id;
  //   })
  // }

  const addNewHeart = (e) => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts/" + e.currentTarget.value + "/like", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })//;//then(() => fetchHearts());
    console.log("dlsa");
    console.log(e.currentTarget.value);
  };

  // const identificationNumber = { thought._id }

  return (
    <div className="thoughts-list-container">
      <ul>
        {thoughtsArray.map(thought => (
          <div className="thought-container" key={thought._id}>
            <li>{thought.message}
              {/* <span className="time-stamp">
                {moment(thought.createdAt).fromNow()}
              </span> */}
            </li>
            <div className="heart-button-container">
              <div>
                <button
                  className="heart-button"
                  onClick={addNewHeart}
                  value={thought._id}
                //on click(call a function that): adds +1 to existing # of {thought.hearts},
                //post to API, fetch updated state and display it
                >
                  <span aria-label="heart" role="img">&#10084;&#65039;</span>
                </button> x {thought.hearts}
              </div>
              <p className="time-stamp">{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
};

export default ThoughtsList;