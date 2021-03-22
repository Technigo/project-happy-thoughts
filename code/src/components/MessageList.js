import React, { useEffect } from 'react'
import moment from 'moment'

import { API_URL } from '../reusable/urls'

export const MessageList = ({messageList, setMessageList}) => {

    useEffect(() => {
        fetchMessageList()
      }, [])
    
      const fetchMessageList = () => {
        fetch(API_URL)
        .then(response => response.json())
        .then(messages => setMessageList(messages))
        .catch(error => console.error(error))
      }

    return (
        <>
        {messageList.map(thought => (
        <div key={thought._id}>
            <h4>{thought.message}</h4>
            <p className="date">- {moment(thought.createdAt).fromNow()}</p>
        </div>
        )
        )}
        </>
    )
}