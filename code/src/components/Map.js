import React from 'react'

import MyThought from './MyThought'

const Map = ({messageList, onLikesIncrease}) => {
    return (
        messageList.map(message => (
            <>
            < MyThought
            key={message._id} 
            message={message} 
            onLikesIncrease={onLikesIncrease}  />
            </>
          ))
    )
}

export default Map