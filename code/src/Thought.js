import React from 'react';
import { LikeButton } from 'LikeButton';

export const Thought = (props) => {
  <article>
    <p>{props.thoughtMessage}</p>
    <div>
      <LikeButton />
      <p>{props.timeStamp}</p>
    </div>
  </article>
}