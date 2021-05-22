import React, { useEffect } from 'react'
import moment from 'moment'

import LikePost from './LikePost'
import UserName from './UserName'
import Hashtag from './Hashtag'

import { HAPPY_THOUGHTS_API } from '../reusable/urls'

const ListMessages = ({ messageList, setMessageList, fetchMessageList }) => {
  useEffect(() => fetchMessageList(HAPPY_THOUGHTS_API), [])

  return (
    <>
      {messageList.map(post => (
        <div key={post._id} className="message-container">
          <div className="message-container-div">
          <UserName
            user={post.user}
            setMessageList={setMessageList}
          />
          <Hashtag
            tag={post.hashtag}
            setMessageList={setMessageList}
          />
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