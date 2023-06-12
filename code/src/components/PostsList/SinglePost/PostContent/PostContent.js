import React from 'react';
import './PostContent.css';

export const PostContent = ({ message }) => {
  return (
    <div className="post-content" aria-label="Thought message">
      <h3>{message}</h3>
    </div>
  )
}