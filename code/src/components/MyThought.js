import React, { useState } from 'react'

import moment from 'moment'

const MyTought = ({message}) => {

    const [myLikes, setMyLikes] = useState(message.heart)

    const addLikes = (event) => {
        setMyLikes(event.target.value++)
    }
    
    return (
        <div key={message._id}>
        <div>
            <h4>{message.message}</h4>
        </div>
            <div>
                <button onClick={addLikes} className="likes-button"><span className="likes">&#10084;</span></button>
                <p>{moment(message.createdAt).fromNow()}</p>
            </div>
            <div><p>{myLikes}</p></div>
        </div>
    )
}

export default MyTought