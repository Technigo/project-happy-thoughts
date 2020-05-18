import React from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton'
import './thoughtslist.css'
import { CommentForm } from './CommentForm'
import { Comments } from './Comments'

export const ThoughtsList = ({ thoughts, onHeartClicked }) => {
  return (
    <>
      {thoughts.map((thought) => (
        <article key={thought._id} className="thought-card">
          <div className="thought-wrapper">
            <p className="happy-thought">{thought.message}</p>
            <div className="heart-container">
              <HeartButton
                id={thought._id}
                onHeartClicked={onHeartClicked}
                hearts={thought.hearts} />
              <p className="likes-counter">x {thought.hearts}</p>
            </div>
            <div className="timestamp">
              <p className="created">{thought.createdBy}</p>
              <p className="created">{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
          <div className="comments-container">
            {thought.comments.length !== 0 &&
              <>
                {thought.comments.map((comment) => (
                  <p key={comment._id}>{comment.createdBy} said {comment.comment} {moment(comment.createdAt).fromNow()}</p>
                ))}
              </>
            }
            <CommentForm />
          </div>
        </article>
      ))}
    </>
  )
}