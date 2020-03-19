import React, { useState, useEffect } from 'react'
import Postcard from './Postcard.js'

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

      {loading && <h3>Love </h3>}
      {postsList.map((post) => {
        return (
          <Postcard
            key={post._id}
            message={post.message}
            hearts={post.hearts}
            createdAt={post.createdAt}
            _id={post._id} />
        )
      })}
    </section>
  )
}

export default Posts