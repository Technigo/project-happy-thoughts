import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { Likes } from './Likes'

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
            <div className="post-info"> 
              <span className="post-time">
                {moment(pubPost.createdAt).fromNow()}
              </span>
              <Likes 
                id={pubPost._id}
                hearts={pubPost.hearts}
                onLike={pubPost.onLike}
                />
              <div className="like-count">x {pubPost.hearts}</div>
            </div>
      </article>
      ))
      }
    </section>
  )
}

// why don't long messages wrap and stay in box?
// tabbing navigates from page bottom to top since flex colum is reversed :/