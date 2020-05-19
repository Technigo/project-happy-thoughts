import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './comments.css'

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [commentName, setCommentName] = useState('')

  const fetchComments = () => {
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts/${id}/comments`)
      .then((res) => res.json())
      .then((json) => setComments(json))
  }

  // Function called when pressing submit button
  const commentSubmit = (e) => {
    e.preventDefault()
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newComment, createdBy: commentName, message: id }, (key, value) => {
        if (value) {
          return value
        } else {
          return undefined
        }
      })
    })
      .then((res) => res.json())
      .then((newComment) => {
        setComments((previousComments) => [...previousComments, newComment])
        setNewComment('')
        setCommentName('')
      })
  }

  useEffect(() => {
    fetchComments()
  }, [id])

  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      {comments.map((comment) => (
        <div className="comment-wrapper" key={comment._id}>
          <p className="comment">{comment.comment}</p>
          <p className="comment-stamp">{comment.createdBy} {moment(comment.createdAt).fromNow()}</p>
        </div>
      ))}
      <form className="comments-form" onSubmit={commentSubmit}>
        <input
          className="comment-text"
          type="text"
          value={commentName}
          placeholder="Enter name (optional)"
          maxLength="14"
          onChange={(e) => setCommentName(e.target.value)} />
        <input
          className="comment-text"
          type="text"
          value={newComment}
          placeholder="Enter comment"
          minLength="3"
          maxLength="40"
          onChange={(e) => setNewComment(e.target.value)} />
        <button className="comment-button" type="submit" disabled={newComment.length < 3 ? true : false}>Comment</button>
      </form>
    </div>
  )
}