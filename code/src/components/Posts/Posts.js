/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { Form } from 'components/Posts/Form/Form'
import { Post } from 'components/Posts/Post/Post'

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className="posts">
      <Form />
      {posts.map((e) => (<Post
        message={e.message}
        hearts={e.hearts}
        _id={e._id}
        createdAt={e.createdAt} />))}
    </div>
  )
}