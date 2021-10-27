import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CircularLoader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-screen grid">
        <CircularProgress
          sx={{
            color: "pink",
          }}
          size={120}
          thickness={6}
        />
      </div>
    );
  } else {
    return null;
  }
};
