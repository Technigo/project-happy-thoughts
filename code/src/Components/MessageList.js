import React from 'react';
import moment from 'moment';
import './messagelist.css'
import { Hearts } from './Hearts';

export const MessageList = (props) => {
  const { message, hearts, createdAt } = props.thought;

  return (
    <article className='message-list'>
      <div>
        <h2>{message}</h2>
      </div>
      <div className='hearts'>
        <Hearts hearts={hearts}
          id={props.thought._id}
        />
        <span className='message-time'>
          {moment(createdAt).fromNow()}
        </span>
      </div>
    </article>
  )
}