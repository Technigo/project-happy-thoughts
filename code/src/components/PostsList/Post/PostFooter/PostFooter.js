import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React from 'react';
import './PostFooter.css';

export const PostFooter = () => {
  return (
    <footer className="post-footer">
      <div className="likes">
        <LikeBtn />
        <p>x Likes</p>
      </div>
      <div className="time-ago">
        <p>x time ago</p>
      </div>
    </footer>
  )
}