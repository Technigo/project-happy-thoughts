import React from "react";
import "./ThoughtsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";

export const ThoughtsList = ({
  thoughtList,
  likedPostValue,
  onSetLikedPostValue,
  onPostALike,
  loadingLike,
}) => {
  return (
    <div className="thoughts__container">
      {thoughtList.map((thought) => {
        return (
          <div className="thoughts__thought-container" key={thought._id}>
            <span className="thoughts__message">{thought.message}</span>
            <div className="thoughts__likes-time">
              <button
                onClick={() => {
                  onPostALike(thought._id);
                  let likedPosts = likedPostValue + 1;
                  console.log(likedPosts);
                  onSetLikedPostValue(likedPostValue + 1);
                  localStorage.setItem("likedPostValue", likedPosts);
                }}
                className="icon__heart"
                style={{
                  backgroundColor: thought.hearts > 0 ? "#fbabab" : "#f3f2f2",
                }}
              >
                <FontAwesomeIcon
                  icon={thought.hearts > 0 ? faHeart : faHeartBroken}
                />
              </button>
              {loadingLike.id === thought._id && loadingLike.loading ? (
                <ClipLoader color={"black"} loading={true} size={20} />
              ) : (
                <span> x {thought.hearts} </span>
              )}
              <span>{moment(thought.createdAt).fromNow()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
