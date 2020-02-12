import React from 'react'
import { PostedText } from './PostedText'
import { Hearts } from './Hearts'
import { Name } from './Name'
import './PostedThought.css'
import Time from 'react-timeago'


export const PostedThought = (props) => {

  return (
    <div
      className="message-box"
      key={props._id}>
      <PostedText
        text={props.message}
      />
      <div className="hearts-time">
        <Hearts
          id={props._id}
          onThoughtLiked={props.onThoughtLiked}
          hearts={props.hearts}
        />
        <span className="time">
          <Name name={props.name} />
          <Time date={props.createdAt} />
        </span>
      </div>
    </div>

  )
}