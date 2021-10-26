import React, { useEffect } from "react";
import "./ThoughtsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export const ThoughtsList = ({ API_URL, onSetThoughtList, thoughtList }) => {
  console.log(thoughtList);

  const getThougthList = () => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        onSetThoughtList(data);
      })
      .catch((err) => {});
  };

  const postALike = (id) => {
    const options = {
      method: "POST",
    };

    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getThougthList();
      });
  };

  useEffect(() => {
    getThougthList();
  }, [API_URL, onSetThoughtList]);

  return (
    <div className="thoughts__container">
      {thoughtList.map((thought) => {
        return (
          <div className="thoughts__thought-container" key={thought._id}>
            <span>{thought.message}</span>
            <div className="thoughts__likes-time">
              <button
                onClick={() => postALike(thought._id)}
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
