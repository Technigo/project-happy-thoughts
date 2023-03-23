import React from 'react';
import './PostContent.css';

export const PostContent = ({ message }) => {
  return (
    <div className="post-content">
      <h2>{message}</h2>
    </div>
  )
}