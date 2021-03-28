import React from 'react'

import MessageElement from './MessageElement'

const MessageList = ({ messageList, handleLikesIncrease }) => {

    return (
		<section className="message-list">
            {messageList.map(message => (
				<MessageElement
					key={message._id}
					message={message}
					onLikesIncrease={handleLikesIncrease} 
				/>    
    	    ))}
		</section>
    )
}

export default MessageList