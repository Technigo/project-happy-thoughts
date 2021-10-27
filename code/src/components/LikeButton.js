import React from "react";
import Icon from "@mui/material/Icon";

export const LikeButton = ({ onLikeButtonClick, thought }) => {
  return (
    <div>
      <button disabled={thought.liked} onClick={() => onLikeButtonClick(thought)}>
        &nbsp;<Icon>favorite</Icon>&nbsp;
      </button>
      <span> x {thought.hearts}</span>
    </div>
  );
};
