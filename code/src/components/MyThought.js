import React from 'react'

import moment from 'moment'

const MyTought = ({message}) => {
    
    return (
        <div key={message._id}>
        <h4>{message.message}</h4>
        <p>{moment(message.createdAt).fromNow()}</p>
        </div>
    )
}

export default MyTought