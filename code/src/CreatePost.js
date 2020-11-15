import React from 'react';
import { LikeButton } from './LikeButton';
import Timestamp from 'react-timeago';
import './CreatePost.css';


export const CreatePost = props => {
  const { message, hearts, createdAt } = props.thought

  return (
    <div className="happy-thoughts">
      <h2
        className='thought-message'
      >
        {message}
      </h2>
      <div className="bottom-content">
        <LikeButton
          hearts={hearts}
          id={props.thought._id}
          onLiked={props.onLiked}
        /> 
        <p
          className="thoughts-time"
          tabIndex='0'
        >
          <Timestamp date={createdAt}/>
        </p>
      </div>
    </div>
  );
};