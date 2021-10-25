import React, { useEffect } from "react";
import "./ThoughtsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export const ThoughtsList = ({ API_URL, onSetThoughtList, thoughtList }) => {
  console.log(thoughtList);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        onSetThoughtList(data);
      })
      .catch((err) => {});
  }, [API_URL, onSetThoughtList]);

  return (
    <div className="thoughts__container">
      {thoughtList.map((thought) => {
        return (
          <div className="thoughts__thought-container" key={thought._id}>
            <span>{thought.message}</span>
            <div className="thoughts__likes-time">
              <button
                className="icon__heart"
                style={{
                  backgroundColor: thought.hearts > 0 ? "#fbabab" : "#f3f2f2",
                }}
              >
                <FontAwesomeIcon
                  icon={thought.hearts > 0 ? faHeart : faHeartBroken}
                />
              </button>
              <span> x {thought.hearts} </span>
              <span>{moment(thought.createdAt).fromNow()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
