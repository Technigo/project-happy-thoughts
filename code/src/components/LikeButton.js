import React from "react";
import Icon from "@mui/material/Icon";

export const LikeButton = ({ onLikeButtonClick, thought }) => {
  return (
    <>
      <div className="like-button-wrapper">
        {thought.liked && (
          <div className="btn-border">
            <button className="like-button" disabled>
              <Icon className="like-icon">favorite</Icon>
            </button>
          </div>
        )}
        {!thought.liked && (
          <div className="btn-border">
            <button className="like-button" onClick={() => onLikeButtonClick(thought)}>
              <Icon className="like-icon">favorite_border</Icon>
            </button>
          </div>
        )}
      </div>
      <span className="sub-text-styling spacing-styling"> x {thought.hearts}</span>
    </>
  );
};
