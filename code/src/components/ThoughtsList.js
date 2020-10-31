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

  // const addNewHeart = () => {
  //   fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" }
  //   }).then(() => fetchHearts());
  // };

  // const identificationNumber = { thought._id }

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

            <button
              className="heart-button"
            // onClick={addNewHeart}

            //on click(call a function that): adds +1 to existing # of {thought.hearts}, 
            //post to API, fetch updated state and display it
            >
              <span aria-label="heart emoji" role="img">&#10084;&#65039;</span>
            </button> x {thought.hearts}
          </div>
        ))}
      </ul>
    </div>
  )
};

export default ThoughtsList;