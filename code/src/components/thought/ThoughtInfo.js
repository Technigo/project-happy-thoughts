import React from 'react';

import Likes from './Likes';
import Time from './Time';

const ThoughtInfo = (props) => {
  return (
    <div className="info">
      <Likes likes={props.likes} />
      <Time created={props.created} />
    </div>
  )
}

export default ThoughtInfo;