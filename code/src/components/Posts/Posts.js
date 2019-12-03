import React, { useState, useEffect } from 'react'
import Form from './Form/Form'
import Post from './Post/Post'

const Posts = () => {
  const [postsList, setPostsList] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data)
        setLoading(false)
      })
  }, [])

  return (
    <section className="posts">
      <Form />
      {loading && <h3>Love is on the way <i className="fa fa-heart" aria-hidden="true" /></h3>}
      {postsList.map((post) => {
        return (
          <Post
            // eslint-disable-next-line no-underscore-dangle
            key={post._id}
            message={post.message}
            hearts={post.hearts}
            createdAt={post.createdAt}
            // eslint-disable-next-line no-underscore-dangle
            _id={post._id} />
        )
      })}
    </section>
  )
}

export default Posts