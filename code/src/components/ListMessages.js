import React, { useEffect } from 'react'
import moment from 'moment'

import LikePost from './LikePost'

const ListMessages = ({ messageList, setMessageList, fetchMessageList }) => {
  useEffect(fetchMessageList, [])

  return (
    <>
      {messageList.map(post => (
        <div key={post._id} className="message-container">
          <div className="message-container-div">
          <p className="message-user">{post.user ? post.user: 'Anonymous'}</p>
          <p className="message-hashtag">
            {post.hashtag && post.hashtag.charAt(0) === '#' && (post.hashtag)}
            {post.hashtag && post.hashtag.charAt(0) !== '#' && ('#' + post.hashtag)}
          </p>
          <p className="message-text">{post.message}</p>
          <div className="message-container-footer">
            <LikePost 
              name={post._id} 
              hearts={post.hearts} 
              messageList={messageList}
              setMessageList={setMessageList} 
              fetchMessageList={fetchMessageList}
            />
            <p 
              className="message-posted-when"
            >
              {moment(post.createdAt).fromNow()}
            </p>
          </div>
          </div>
        </div>
      ))}
    </>
  )

}
export default ListMessages