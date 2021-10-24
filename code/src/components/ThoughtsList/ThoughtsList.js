import React, { useState, useEffect } from "react";
import "./ThoughtsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export const ThoughtsList = () => {
  const [thoughtList, setThoughtList] = useState([]);
  console.log(thoughtList);

  function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  useEffect(() => {
    const api20thoughts =
      "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    fetch(api20thoughts)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setThoughtList(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="thoughts__container">
      {thoughtList.map((thought) => {
        return (
          <div className="thoughts__thought-container" key={thought._id}>
            <span>{thought.message}</span>
            <div className="thoughts__likes-time">
              <span
                className="icon__heart"
                style={{
                  backgroundColor: thought.hearts > 0 ? "pink" : "lightgray",
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span> x {thought.hearts} </span>
              <span>{timeSince(new Date(thought.createdAt))} ago</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
