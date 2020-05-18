import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts/${id}/comments`)
      .then(res => res.json())
      .then(json => {
        setComments(json)
      })
  }, [id])

  console.log(id)
  return (
    <>
      {comments.map((comment) => (
        <p key={comment._id}>{comment.createdBy} said {comment.comment} {moment(comment.createdAt).fromNow()}</p>
      ))}
    </>
  )
}