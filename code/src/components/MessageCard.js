import React from 'react';

const MessageCard = ({ item }) => {
    return (
        <div className="messageCard">
            <p>{item.message}</p>
            <div>{item.hearts}</div>
        </div>
    );
}

export default MessageCard