import React, { useState, useEffect } from 'react'
import Postcard from './Postcard.js'
import Posting from './Posting.js'
import './postcard.css'
import moment from 'moment'

const Posts = () => {
  const [postsList, setPostsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://happyclappy.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data)
        setLoading(false)
      })
  }, [])

  return (
    <section className="posts">
      <Posting />
      {loading && <h3>There will be messages of love soon ... </h3>}
      {postsList.map((post) => {
        return (
          <Postcard
            key={post._id}
            message={post.message}
            hearts={post.hearts}
            createdAt={moment(post.createdAt).fromNow()}
            _id={post._id}
          />
        )
      })}
    </section>
  )
}


export default Posts