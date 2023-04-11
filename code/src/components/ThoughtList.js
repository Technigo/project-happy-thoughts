/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import MessageCard from './MessageCard';

const ThoughtList = ({ thoughts, sendLike }) => {
    return (
        <div className="messageList">
            {thoughts.map((item) => <MessageCard item={item} sendLike={sendLike} />)}
        </div>
    )
}

export default ThoughtList

