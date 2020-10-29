import React from 'react';

import Likes from './Likes';
import Time from './Time';

const ThoughtInfo = ({ id, created, likes, onLiked }) => {
  return (
    <div className="info">
      <Likes
        id={id}
        likes={likes}
        onLiked={onLiked}
      />
      <Time created={created} />
    </div>
  )
}

export default ThoughtInfo;