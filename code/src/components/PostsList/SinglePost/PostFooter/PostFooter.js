import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React from 'react';
import './PostFooter.css';

// see setcolorvariable in live session tues min37
// to change button after it has a like
// if conditional (has like)
// use custom Hook
// const useBtnStyleEffect = (callbackFunction) => useEffect(callbackFunction, [callbackFunction]);

// const btnStyleFunction = () => {
// if conditional (has like)
// }

export const PostFooter = ({ likes }) => {
  return (
    <footer className="post-footer">
      <div className="likes">
        <LikeBtn />
        <p>x {likes}</p>
      </div>
      <div className="time-ago">
        <p>x time ago</p>
      </div>
    </footer>
  )
}