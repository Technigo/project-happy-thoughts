import React, { useEffect } from 'react'
import moment from 'moment'

import { HAPPY_THOUGHTS_API } from '../reusable/urls'
import LikePost from './LikePost'

const ListMessages = ({ messageList, setMessageList }) => {

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(HAPPY_THOUGHTS_API)
      .then(response => response.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err))
  }

  return (
    <>
      {messageList.map(post => (
        <article key={post._id} className="message-container">
          <div className="message-container-div" >
            <h3 className="message-text">{post.message}</h3>
            <div className="message-container-footer">
              <LikePost 
              name={post._id} 
              hearts={post.hearts} 
              messageList={messageList}
              setMessageList={setMessageList} 
              fetchMessageList={fetchMessageList}/>
              <p className="message-posted-when">{moment(post.createdAt).fromNow()}</p>
            </div>
          </div>
        </article>
      ))}
    </>
  )

}
export default ListMessages