import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularLoader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-screen">
        <CircularProgress
          sx={{
            color: "pink",
          }}
          size={100}
          thickness={1}
        />
      </div>
    );
  } else {
    return null;
  }
};
