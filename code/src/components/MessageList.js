import React from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton';

export const MessageList = ({ messageList, setMessageList }) => {

    const onMessageLiked = (likedMessageId) => {
        const updatedLikes = messageList.map((likes) => {
            if (likes._id === likedMessageId) {
                likes.hearts += 1
            }
            return likes
        })
        setMessageList(updatedLikes)
    }

    return (
        <section className="cards-container" >
            {messageList.map(message => (
                <article className="message-card" key={message._id}>
                    <p className="message" tabIndex="0">
                        {message.message} 
                    </p>
                    <HeartButton liked={onMessageLiked} hearts={message.hearts} likesId={message._id} />
                    <p className="message-time" tabIndex="0">
                        {moment(message.createdAt).fromNow()}
                    </p>
                </article>
            ))
            }
        </section>

    )
}