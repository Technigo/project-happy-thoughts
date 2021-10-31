import React from 'react';
import './loadingItem.css';

// Component for loading spinner
const LoadingItem = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
};

export default LoadingItem;
