import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularLoader = ({ isActive }) => {
  if (isActive) {
    return (
      <div className="loading-screen">
        <CircularProgress
          sx={{
            color: "pink",
          }}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
