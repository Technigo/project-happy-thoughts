import React, { useState, useEffect } from 'react'
import { Name } from './Name'
import { NewThought } from './NewThought'

export const CommentForm = ({ id }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [name, setName] = useState('')

  // Function determining what is happening when form i submitted 
  const handleCommentFormSubmit = (event) => {
    event.preventDefault()

    const jBody = JSON.stringify({ comment: newComment, createdBy: name, message: id }, (key, value) => {
      if (value) {
        return value
      } else {
        return undefined
      }
    })

    // Post new comment to API using POST
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jBody
    })
      .then((res) => res.json())
      .then((newComment) => {
        // Adds new thought to array without having to fetch again
        setComments((previousComments) => [newComment, ...previousComments])
        // Clears textarea input field
        setNewComment('')
        setName('')
      })
  }

  return (
    <div>
      <form className="comment-form" onSubmit={handleCommentFormSubmit}>
        <div className="new-comment-container">
          <Name
            value={name}
            onChange={(event) => setName(event.target.value)} />
          <NewThought
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            thoughtQ="Happy comment"
            maxLength="20"
            rowNo="1" />
        </div>
        <button type="submit" disabled={newComment.length < 5 ? true : false}>Comment</button>
      </form>
    </div>
  )
}