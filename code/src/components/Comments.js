import React, { useState, useEffect } from 'react'
import moment from 'moment'

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
    <div>
      {comments.map((comment) => (
        <p key={comment._id}>{comment.createdBy} said {comment.comment} {moment(comment.createdAt).fromNow()}</p>
      ))}
      <form onSubmit={commentSubmit}>
        <input type="text" value={commentName} onChange={(e) => setCommentName(e.target.value)} />
        <input type="text" onChange={(e) => setNewComment(e.target.value)} />
        <button type="submit">Comment</button>
      </form>
    </div>
  )
}