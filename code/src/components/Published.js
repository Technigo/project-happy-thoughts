import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { Likes } from 'components/Likes'

export const Published = () => {
  const posted_url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [pubPosts, setPubPosts] = useState([])

  useEffect(() => {
    fetch(posted_url)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setPubPosts(data.reverse())
      })
  }, [])
  
  return (
    <section>
      {pubPosts.map(pubPost => (
        <article 
          key={pubPost._id} 
          className="pubPost">
            <p className="post-txt">
              {pubPost.message}
            </p>
            <p className="post-info"> 
              <span className="post-time">
                {moment(pubPost.createdAt).fromNow()}
              </span>
              <Likes />
              <p className="like-count">x {pubPost.hearts}</p>
            </p>
      </article>
      ))
      }
    </section>
  )
}