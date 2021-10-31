import React from "react";

const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="refresh-button">
      <button onClick={handleRefresh}>refresh feed</button>
    </div>
  );
};
export default RefreshButton;
