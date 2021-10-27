import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

export const UpdateButton = ({ onFetchThought }) => {
  return (
    <div className="update-button-container">
      <Button
        variant="contained"
        onClick={() => {
          window.scrollTo(0, 0);
          onFetchThought();
        }}
      >
        update&nbsp;<Icon>favorite</Icon>&nbsp;thoughts
      </Button>
    </div>
  );
};
