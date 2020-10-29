import React from "react";

import "./loading.css";

const Loading = ({ loading }) => {
  return <>{loading && <p className="loading">Loading messages...</p>}</>;
};

export default Loading;
